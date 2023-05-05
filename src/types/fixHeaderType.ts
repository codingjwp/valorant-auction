export interface HeaderStyle {
  navPosition?: string;
}

export interface HeaderProps extends HeaderStyle {
  navData: {
    id: number;
    naming : string;
    payload: string;
    linking?: string;
  }[];
  onItemClick?: (payload: string) => void;
}
