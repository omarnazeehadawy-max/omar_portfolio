export interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  type: 'image' | 'video';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface OrderFormData {
  name: string;
  businessName: string;
  budget: string;
  description: string;
}