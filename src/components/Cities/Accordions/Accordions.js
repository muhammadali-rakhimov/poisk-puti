import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Accordions = () => {
  return (
    <Accordion style={{ overflow: "hidden" }}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Город Ташкент</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quibusdam, id dolores corrupti obcaecati eius aliquam blanditiis
            incidunt maiores, perferendis iusto sapiente voluptas qui debitis
            impedit repellendus magnam, eum et.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Кашкадарьинская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quibusdam, id dolores corrupti obcaecati eius aliquam blanditiis
            incidunt maiores, perferendis iusto sapiente voluptas qui debitis
            impedit repellendus magnam, eum et.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Бухарская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Джизакская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Навоийская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Самаркандская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Сурхандарьинская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Сырдарьинская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Ташкентская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Ферганская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Хорезмская область</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Республика каралпакстан</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde illum
            in, maxime illo quaerat non ipsa quisquam exercitationem! Dolor
            officia sint ex corporis explicabo natus impedit ea eius repudiandae
            laboriosam!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;
