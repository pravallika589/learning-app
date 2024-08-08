export interface UniversityCountApiResponseI {
  data: UniversityCountI[];
  status: number;
}

export interface UniversityCountI {
  total: number;
  country: string;
  countryCode: string;
}
