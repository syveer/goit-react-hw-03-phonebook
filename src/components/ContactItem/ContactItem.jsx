import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, phone } = contact;

  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
