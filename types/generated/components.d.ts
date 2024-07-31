import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsReviews extends Schema.Component {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'reviews';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    reviewText: Attribute.Text;
    aggregateScore: Attribute.Decimal;
    reviewPostedAt: Attribute.DateTime;
    usabilityRating: Attribute.Integer;
    installationRating: Attribute.Integer;
    connectivityRating: Attribute.Integer;
    accessoriesRating: Attribute.Decimal;
    countryCode: Attribute.String;
    verifiedPurchase: Attribute.Boolean & Attribute.Required;
  };
}

export interface ComponentsProductFeature extends Schema.Component {
  collectionName: 'components_components_product_features';
  info: {
    displayName: 'productFeature';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    value: Attribute.String;
  };
}

export interface ComponentsProductAttributes extends Schema.Component {
  collectionName: 'components_components_product_attributes';
  info: {
    displayName: 'productAttributes';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface BrandComponenetsBrandReviews extends Schema.Component {
  collectionName: 'components_brand_componenets_brand_reviews';
  info: {
    displayName: 'brandReviews';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    postedAt: Attribute.DateTime & Attribute.Required;
    reviewText: Attribute.Text & Attribute.Required;
    score: Attribute.Decimal & Attribute.Required;
    customerServiceRating: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.reviews': ComponentsReviews;
      'components.product-feature': ComponentsProductFeature;
      'components.product-attributes': ComponentsProductAttributes;
      'brand-componenets.brand-reviews': BrandComponenetsBrandReviews;
    }
  }
}
