export type GumroadTypes = {
  products: {
    currency: string;
    custom_delivery_url: string;
    custom_fields: [];
    custom_permalink: string;
    custom_receipt: string;
    custom_summary: string;
    customizable_price: boolean;
    deleted: boolean;
    description: string;
    file_info: {};
    formatted_price: string;
    id: string;
    is_tiered_membership: boolean;
    max_purchase_count: null;
    name: string;
    preview_url: string;
    price: number;
    published: boolean;
    recurrences: null;
    require_shipping: boolean;
    sales_count: number;
    sales_usd_cents: number;
    short_url: string;
    shown_on_profile: boolean;
    subscription_duration: null;
    tags: string[];
    thumbnail_url: string;
    url: string;
  }[];
  success: boolean;
};

export type ProductType = {
  currency: string;
  custom_delivery_url: string;
  custom_fields: [];
  custom_permalink: string;
  custom_receipt: string;
  custom_summary: string;
  customizable_price: boolean;
  deleted: boolean;
  description: string;
  file_info: {};
  formatted_price: string;
  id: string;
  is_tiered_membership: boolean;
  max_purchase_count: null;
  name: string;
  preview_url: string;
  price: number;
  published: boolean;
  recurrences: null;
  require_shipping: boolean;
  sales_count: number;
  sales_usd_cents: number;
  short_url: string;
  shown_on_profile: boolean;
  subscription_duration: null;
  tags: string[];
  thumbnail_url: string;
  url: string;
};
