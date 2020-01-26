export interface Offer {
  id: string;
  name: string;
  contractStartDate: Date;
  contractEndDate: Date;
}

export interface Offers {
  offers: Offer[];
}
