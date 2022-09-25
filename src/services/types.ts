export interface Country {
  id: number;
  name: string;
}

export interface SelectedCountry {
  name: {
    common: string;
  }
  subregion: string;
  flag: string;
}