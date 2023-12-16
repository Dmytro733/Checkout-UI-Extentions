import {reactExtension, DatePicker} from '@shopify/ui-extensions-react/checkout';
import {React, useState} from 'react';

// ./Delivery.jsx
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-after',
  () => <Extension />,
);

function Extension() {
  const [deliveryDate, setDeliveryDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);

  const hundleDateChange = (date) => {
    setDeliveryDate(date)
  }

  return (
    <DatePicker selected={deliveryDate} onChange={hundleDateChange} />
  );
  
}