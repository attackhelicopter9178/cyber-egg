export type Category = 'domestic' | 'overseas';
export type Validity = 'permanent' | 'daily' | 'monthly' | 'one-time' | 'trial' | 'unknown';
export type Reliability = 'high' | 'medium' | 'low';

export interface TokenResource {
  id: string;
  name: string;
  category: Category;
  description: string;
  tags: string[];
  link: string;
  accessNote?: string;
  quota: string;
  validity: Validity;
  validityNote: string;
  reliability: Reliability;
  source: string;
  updatedAt: string;
  verifiedAt: string;
}
