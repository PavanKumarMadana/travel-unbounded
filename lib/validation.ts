export const HOTEL_CATEGORIES = ['Standard', 'Deluxe', 'Luxury'] as const;
export type HotelCategory = (typeof HOTEL_CATEGORIES)[number];

export const COUNTRY_CODES = [
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'USA / Canada (+1)' },
  { code: '+44', label: 'United Kingdom (+44)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+971', label: 'United Arab Emirates (+971)' },
  { code: '+27', label: 'South Africa (+27)' },
  { code: '+254', label: 'Kenya (+254)' },
  { code: '+94', label: 'Sri Lanka (+94)' },
  { code: '+84', label: 'Vietnam (+84)' },
  { code: '+255', label: 'Tanzania (+255)' },
] as const;

export interface EnquiryInput {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  dateOfTravel: string;
  numberOfPeople: number | string;
  hotelCategory: string;
  numberOfChildren?: number | string;
}

export interface FieldErrors {
  fullName?: string;
  countryCode?: string;
  contactNumber?: string;
  email?: string;
  dateOfTravel?: string;
  numberOfPeople?: string;
  hotelCategory?: string;
  numberOfChildren?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9]{6,15}$/;

function normalizeInt(value: number | string | undefined): number | null {
  if (value === undefined || value === null || value === '') return null;
  const n = typeof value === 'number' ? value : parseInt(String(value), 10);
  return Number.isFinite(n) ? n : null;
}

export function validateEnquiry(input: EnquiryInput): FieldErrors {
  const errors: FieldErrors = {};

  const fullName = (input.fullName || '').trim();
  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Please enter a valid full name.';
  }

  if (!input.countryCode) {
    errors.countryCode = 'Please select your country code.';
  }

  const contactNumber = (input.contactNumber || '').replace(/[\s-]/g, '');
  if (!contactNumber) {
    errors.contactNumber = 'Please enter your contact number.';
  } else if (!PHONE_RE.test(contactNumber)) {
    errors.contactNumber = 'Please enter a valid contact number.';
  }

  const email = (input.email || '').trim().toLowerCase();
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (!input.dateOfTravel) {
    errors.dateOfTravel = 'Please select your travel date.';
  } else {
    const travelDate = new Date(input.dateOfTravel);
    if (Number.isNaN(travelDate.getTime())) {
      errors.dateOfTravel = 'Please select a valid travel date.';
    } else if (travelDate < today) {
      errors.dateOfTravel = 'Please select a future travel date.';
    }
  }

  const people = normalizeInt(input.numberOfPeople);
  if (people === null) {
    errors.numberOfPeople = 'Please enter the number of people.';
  } else if (people < 1) {
    errors.numberOfPeople = 'Number of people must be at least 1.';
  }

  if (!input.hotelCategory) {
    errors.hotelCategory = 'Please select a hotel category.';
  } else if (!HOTEL_CATEGORIES.includes(input.hotelCategory as HotelCategory)) {
    errors.hotelCategory = 'Please select a valid hotel category.';
  }

  if (input.numberOfChildren !== undefined && input.numberOfChildren !== '') {
    const children = normalizeInt(input.numberOfChildren);
    if (children === null || children < 0) {
      errors.numberOfChildren = 'Number of children cannot be negative.';
    }
  }

  return errors;
}

export function normalizeEnquiry(input: EnquiryInput) {
  const children =
    input.numberOfChildren === undefined || input.numberOfChildren === ''
      ? 0
      : parseInt(String(input.numberOfChildren), 10);

  return {
    full_name: (input.fullName || '').trim(),
    country_code: input.countryCode,
    contact_number: (input.contactNumber || '').replace(/[\s-]/g, ''),
    email: (input.email || '').trim().toLowerCase(),
    date_of_travel: input.dateOfTravel,
    number_of_people: parseInt(String(input.numberOfPeople), 10),
    hotel_category: input.hotelCategory,
    number_of_children: Number.isFinite(children) ? children : 0,
  };
}
