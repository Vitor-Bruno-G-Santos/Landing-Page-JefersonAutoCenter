"use client";
import React from 'react';
import { highlightBrand } from '../../utils/highlightBrand';
import { assetUrl } from '../../utils/assetPath';

const DEFAULT_PHOTOS = [
  { image: './images/unidade-salgado-filho.webp' },
  { image: './images/unidade-julio-castilho.webp' },
  { image: './images/oficina-hero.webp' },
  { image: './images/servico-injecao.webp' },
  { image: './images/servico-oleo.webp' },
  { image: './images/servico-revisao.webp' }
];

function PhotoTile({ photo, className = '' }) {
  const src = typeof photo === 'string' ? photo : photo.image;

  return (
    <div
      className={`relative bg-[#001744] rounded-md overflow-hidden border border-blue-800/80 shadow-lg select-none ${className}`}
    >
      <img
        src={assetUrl(src)}
        alt="Estrutura Jeferson Autocenter"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

export default function CompanyPhotosOrganism({
  gallery = {}
}) {
  const {
    title = 'Conheça a estrutura do Jeferson Autocenter',
    items = DEFAULT_PHOTOS
  } = gallery;

  const photos = items && items.length > 0 ? items : DEFAULT_PHOTOS;

  // Garante 6 itens para fechar o mosaico de 4 colunas do layout
  const mosaicItems = Array.from({ length: 6 }, (_, i) => photos[i % photos.length]);

  return (
    <section
      id="fotos"
      className="bg-gradient-to-b from-[#002d80] via-[#001f5c] to-[#001744] py-16 md:py-20 px-4 section-divider-top overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {highlightBrand(title)}
          </h2>
        </div>
      </div>

      {/* Carrossel Infinito em Mosaico Assimétrico (somente imagens) */}
      <div className="reveal-card relative w-full max-w-[1600px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] py-2">
        <div className="animate-marquee-infinite flex w-max">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1 ? 'true' : undefined}
              className="flex items-stretch h-[340px] sm:h-[400px] md:h-[460px] gap-1.5 md:gap-2 pr-1.5 md:pr-2 shrink-0"
            >
              {/* Coluna 1: Bloco grande quadrado/largo ocupando a altura total */}
              <PhotoTile
                photo={mosaicItems[0]}
                className="w-[290px] sm:w-[370px] md:w-[450px] h-full shrink-0"
              />

              {/* Coluna 2: Dois blocos médios empilhados (topo levemente maior que a base) */}
              <div className="flex flex-col gap-1.5 md:gap-2 w-[210px] sm:w-[250px] md:w-[290px] h-full shrink-0">
                <PhotoTile
                  photo={mosaicItems[1]}
                  className="w-full h-[55%]"
                />
                <PhotoTile
                  photo={mosaicItems[2]}
                  className="w-full flex-1"
                />
              </div>

              {/* Coluna 3: Bloco vertical alto ocupando a altura total */}
              <PhotoTile
                photo={mosaicItems[3]}
                className="w-[180px] sm:w-[215px] md:w-[250px] h-full shrink-0"
              />

              {/* Coluna 4: Dois blocos largos empilhados (topo panorâmico menor, base maior) */}
              <div className="flex flex-col gap-1.5 md:gap-2 w-[270px] sm:w-[330px] md:w-[390px] h-full shrink-0">
                <PhotoTile
                  photo={mosaicItems[4]}
                  className="w-full h-[40%]"
                />
                <PhotoTile
                  photo={mosaicItems[5]}
                  className="w-full flex-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
