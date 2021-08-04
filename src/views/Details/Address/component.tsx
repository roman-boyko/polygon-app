import React from 'react';
import Typography from "@material-ui/core/Typography";
import NumberFormat from 'react-number-format';

interface Props {
  hq_address: string;
  country: string;
  phone: string;
}

const AddressComponent = ({ 
  hq_address,
  country,
  phone
}: Props) => (
  <>
    <Typography variant="body2">{hq_address}</Typography>
    <Typography variant="body2" style={{ textTransform: "uppercase" }}>
      {country}
    </Typography>
    <Typography variant="body2">
      <NumberFormat
        value={phone}
        displayType='text'
        format="+# (###) ###-####"
      />
    </Typography>
  </>
);

export default AddressComponent;