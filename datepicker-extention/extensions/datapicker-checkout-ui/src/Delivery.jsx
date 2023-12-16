import {reactExtension, DatePicker, useApplyMetafieldsChange, useMetafield} from '@shopify/ui-extensions-react/checkout';
import {React, useState} from 'react';

// ./Delivery.jsx
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-after',
  () => <Extension />,
);

function Extension() {
  const dateNow = {
    value: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  };

  const deliveryDate = useMetafield({
    namespace: 'custom',
    key: 'delivery_date'
  }) || dateNow;

  const setDeliveryDate = useApplyMetafieldsChange();

  return (
    <DatePicker selected={deliveryDate?.value} onChange={(value) => setDeliveryDate({
      type: 'updateMetafield',
      namespace: 'custom',
      key: 'delivery_date',
      valueType: 'string',
      value
    })} />
  );
  
}