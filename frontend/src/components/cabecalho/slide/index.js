import React, { useState } from 'react';
import "./index.css";
import { 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption 
} from 'reactstrap';
import imgUm from '../../../assets/imagens/slides/SlideUm.png';
import imgDois from '../../../assets/imagens/slides/SlideDois.png';
import imgTres from '../../../assets/imagens/slides/SlideTres.png';

const items = [
  {
    src: imgUm,
    altText: "Slide 1",
    caption: <p>Monitoramento em tempo real do distanciamento e fluxo de pessoas. <br />
      Controle de espaços.</p>
  },
  {
    src: imgDois,
    altText: "Slide 2",
    caption: <p>Monitoramento de parâmetros chave. <br />
      Monitoramento de uso e ocupação do solo. <br />
      Identificação de falhas e deficiências nutricionais na lavoura.</p>
  },
  {
    src: imgTres,
    altText: "Slide 3",
    caption: <p>Tecnologias de Cidades Inteligentes são úteis dentro e fora de crises como essa.</p>
  }
];

const Slide = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img id="slides" src={item.src} alt={item.altText} />
        <CarouselCaption
          // captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction=""
          directionText=""
          onClickHandler={previous}
        />
        <CarouselControl
          direction=""
          directionText=""
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

export default Slide;