export interface UniversityDetailsI {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  web_pages: string[];
}

export interface UniversityApiResponseI {
  data: UniversityDetailsI[];
  status: number;
}
