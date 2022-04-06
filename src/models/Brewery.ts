export default interface Brewery {
  id: number,
  name: string,
  brewery_type: string,
  street: string,
  address_2: string | null,
  address_3: string | null,
  city: string,
  state: string,
  county_province: string | null,
  postal_code: string,
  country: string,
  longitude: string,
  latitude: string,
  phone: string,
  website_url: string,
  updated_at: Date,
  created_at: Date
}