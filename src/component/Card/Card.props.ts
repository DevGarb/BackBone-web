export interface CardProps {
  imageUrl: string | undefined;
  title: string;
  subtitle?: string;
  checkbox: boolean;
  radio: string;
  dateOfBirth?: string;
  tel: number;
  obs: string;
}
