'use client';

import { ProductsWarning } from '@/components/layout/ProductsWarning';
import { ProductHeader } from '@/components/shared/Product/ProductHeader';
import { ProductImageCarousel } from '@/components/shared/Product/ProductImageCarousel';
import { ProductOptions } from '@/components/shared/Product/ProductOptions';
import { ProductOrderButton } from '@/components/shared/Product/ProductOrderButton';
import { ProductOrderDrawer } from '@/components/shared/Product/ProductOrderDrawer';
import { ProductPrice } from '@/components/shared/Product/ProductPrice';
import { GritLogo } from '@/components/ui/GritLogo';
import { ReusableAccordionItem } from '@/components/ui/ReusableAccordion/ReusableAccordionItem';
import { ReusableAccordionTemplate } from '@/components/ui/ReusableAccordion/ReusableAccordionTemplate';
import { productAccordions } from '@/data/accordions/product_accordions';
import { products } from '@/data/products';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedVariation, setSelectedVariation] = useState('');
  const [selectedTire, setSelectedTire] = useState('');
  const [selectedWheels, setSelectedWheels] = useState('');
  const [imageFullscreen, setImageFullscreen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    if (imageFullscreen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // очистка на размонтирование
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [imageFullscreen]);

  const product = products.find((product) => product.id === slug);

  const roundedPrepay = ((product.price * 0.8) / 1000) * 1000;

  if (!product) return <p>продукт не найден...</p>;

  return (
    <div>
      {/* Изображения */}
      <div>
        <ProductImageCarousel
          onClick={() => setImageFullscreen(true)}
          data={product.images}
          alt={product.name}
        />
      </div>

      <div
        className={`
    fixed inset-0 z-[100] bg-white overflow-y-auto transition-opacity duration-300 ease-in-out
    ${
      imageFullscreen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    }
  `}
      >
        {/* X закрытия */}
        <button
          onClick={() => setImageFullscreen(false)}
          className='absolute top-3 right-3 z-[101] text-black transition'
        >
          <X size={28} />
        </button>

        {/* контент */}
        <div className='flex flex-col'>
          {product?.images?.map((image, index) => (
            <div key={index} className='relative w-full max-h-[400px]'>
              <Image
                src={image}
                width={800}
                height={400}
                loading={index === 0 ? 'eager' : 'lazy'}
                alt={product.name}
                className='w-full max-h-[400px] object-contain'
              />
              <div className='absolute bottom-3 right-3 opacity-30'>
                <GritLogo size={50} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-5 px-5'>
        {/* Название и другое */}
        <div className='flex flex-col gap-1'>
          <ProductHeader data={product.name} />
        </div>

        {/* Цена */}
        <div className='flex flex-col'>
          <ProductPrice data={product.price} old={product?.old_price} />
          <p className='text-xs text-neutral-500'>
            цена меняется в зависимости от конфигурации
          </p>
          {/* <p className='text-sm text-blue-500'>
            * — предоплата от {roundedPrepay.toLocaleString('ru-RU')} ₸
          </p> */}
        </div>

        {/* Разное */}
        <div className='flex flex-col gap-6 mt-6'>
          {/* Цвет */}
          {product?.colors?.length > 0 && (
            <div className='flex flex-col gap-2'>
              <ProductOptions
                label='Цвет'
                stateValue={selectedColor}
                setStateValue={setSelectedColor}
                data={product.colors}
              />
              {product?.colors_description && (
                <p className='text-neutral-500 text-[12px]'>
                  {product.colors_description}
                </p>
              )}
            </div>
          )}

          {/* Размер */}
          {product?.sizes?.length > 0 && (
            <div className='flex flex-col gap-2'>
              <ProductOptions
                label='Размер рамы'
                stateValue={selectedSize}
                setStateValue={setSelectedSize}
                data={product.sizes}
              />
            </div>
          )}

          {/* Шатуны */}
          {product?.variations?.length > 0 && (
            <div className='flex flex-col gap-2'>
              <ProductOptions
                label='Шатуны'
                stateValue={selectedVariation}
                setStateValue={setSelectedVariation}
                data={product.variations}
              />
            </div>
          )}

          {/* Колеса */}
          {product?.tires?.length > 0 && (
            <div className='flex flex-col gap-2'>
              <ProductOptions
                label='Колеса'
                stateValue={selectedTire}
                setStateValue={setSelectedTire}
                data={product.tires}
              />
              {product?.tires_description && (
                <p className='text-neutral-500 text-[12px]'>
                  {product.tires_description}
                </p>
              )}
            </div>
          )}

          {/* Руль */}
          {product?.wheels?.length > 0 && (
            <div className='flex flex-col gap-2'>
              <ProductOptions
                label='Руль'
                stateValue={selectedWheels}
                setStateValue={setSelectedWheels}
                data={product.wheels}
              />
              {product?.wheels_description && (
                <p className='text-neutral-500 text-[12px]'>
                  {product.wheels_description}
                </p>
              )}
            </div>
          )}
          <div>
            {/* Accordions */}
            <ReusableAccordionTemplate>
              {/* Характеристики */}
              <ReusableAccordionItem
                index={product.id}
                content={product?.description?.map((desc, index) => (
                  <p key={index}>• {desc}</p>
                ))}
              />
              {/* Информационные текста */}
              {productAccordions.map((acc) => (
                <ReusableAccordionItem
                  key={acc.id}
                  index={acc.id}
                  label={acc.name}
                  content={acc.text.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className='mb-2'>
                      {paragraph}
                    </p>
                  ))}
                />
              ))}
            </ReusableAccordionTemplate>
          </div>
          {/* Кнопка заказа (in place) */}
          <ProductOrderButton onClick={() => setDrawerOpen(true)} />
        </div>
      </div>
      {/* Кнопка заказа (fixed) */}
      <ProductOrderButton onClick={() => setDrawerOpen(true)} mode='fixed' />
      <ProductOrderDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        close={() => setDrawerOpen(false)}
        product={product.name}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        selectedVariation={selectedVariation}
        selectedWheels={selectedWheels}
        selectedTire={selectedTire}
      />
      <div className='px-5'>
        <ProductsWarning />
      </div>
    </div>
  );
}
