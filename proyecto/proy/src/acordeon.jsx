import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function AccordionComponent(props) {
  const { items } = props;
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.id}>{item.title}</AccordionHeader>
            <AccordionBody accordionId={item.id}>{item.content}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;