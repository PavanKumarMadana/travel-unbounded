import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/lib/supabase-server';
import { validateEnquiry, normalizeEnquiry } from '@/lib/validation';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body. Please send valid JSON.' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Invalid enquiry data.' },
      { status: 400 }
    );
  }

  const input = body as Record<string, unknown>;

  const enquiryInput = {
    fullName: String(input.fullName ?? ''),
    countryCode: String(input.countryCode ?? ''),
    contactNumber: String(input.contactNumber ?? ''),
    email: String(input.email ?? ''),
    dateOfTravel: String(input.dateOfTravel ?? ''),
    numberOfPeople: input.numberOfPeople === '' ? '' : Number(input.numberOfPeople),
    hotelCategory: String(input.hotelCategory ?? ''),
    numberOfChildren:
      input.numberOfChildren === '' || input.numberOfChildren === undefined
        ? ''
        : Number(input.numberOfChildren),
  };

  const errors = validateEnquiry(enquiryInput);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: 'Invalid enquiry data.', errors },
      { status: 400 }
    );
  }

  const record = normalizeEnquiry(enquiryInput);

  try {
    const supabase = getSupabaseServer();
    const { error } = await supabase.from('enquiries').insert(record);

    if (error) {
      console.error('Database error while saving enquiry:', error.message);
      return NextResponse.json(
        {
          success: false,
          message:
            'Something went wrong while submitting your enquiry. Please try again.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully.' },
      { status: 201 }
    );
  } catch (err) {
    console.error('Unexpected error in enquiry route:', err);
    return NextResponse.json(
      {
        success: false,
        message:
          'Something went wrong while submitting your enquiry. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed. Use POST to submit an enquiry.' },
    { status: 405 }
  );
}
