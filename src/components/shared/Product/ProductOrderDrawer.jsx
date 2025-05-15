'use client';

import { Button } from '@/components/ui/Button';
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/Drawer';
import { GenerateWhatsappLink } from '@/components/ui/GenerateWhatsappLink';
import { WhatsappLogo } from '@/components/ui/logo/WhatsappLogo';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import clsx from 'clsx';

export function ProductOrderDrawer({
  open,
  onOpenChange,
  close,
  product,
  selectedColor,
  selectedSize,
  selectedVariation,
  selectedTire,
  selectedWheels,
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className='flex flex-col px-5 pt-3 pb-7'>
          <div>
            <p className='text-2xl font-medium'>ваш заказ</p>
            <div className='flex flex-col gap-1 mt-2'>
              {/* модель */}
              <div className='flex items-baseline gap-1'>
                <p className='font-medium'>модель:</p>
                <p className='text-sm'>{product}</p>
              </div>

              {/* цвет */}
              <div className='flex items-baseline gap-1'>
                <p className='font-medium'>цвет:</p>
                <p
                  className={clsx(
                    'text-sm',
                    !selectedColor && 'text-muted-foreground'
                  )}
                >
                  {selectedColor || 'не выбрано'}
                </p>
              </div>

              {/* размер */}
              <div className='flex items-baseline gap-1'>
                <p className='font-medium'>размер рамы:</p>
                <p
                  className={clsx(
                    'text-sm',
                    !selectedSize && 'text-muted-foreground'
                  )}
                >
                  {selectedSize || 'не выбрано'}
                </p>
              </div>

              {/* шатуны */}
              <div className='flex items-baseline gap-1'>
                <p className='font-medium'>шатуны:</p>
                <p
                  className={clsx(
                    'text-sm',
                    !selectedVariation && 'text-muted-foreground'
                  )}
                >
                  {selectedVariation || 'не выбрано'}
                </p>
              </div>

              {/* колеса */}
              <div className='flex items-baseline gap-1'>
                <p className='font-medium'>колеса:</p>
                <p
                  className={clsx(
                    'text-sm',
                    !selectedTire && 'text-muted-foreground'
                  )}
                >
                  {selectedTire || 'не выбрано'}
                </p>
              </div>

              {/* руль */}
              <div className='flex items-baseline gap-1'>
                <p className='font-medium'>руль:</p>
                <p
                  className={clsx(
                    'text-sm',
                    !selectedWheels && 'text-muted-foreground'
                  )}
                >
                  {selectedWheels || 'не выбрано'}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
              <a
                href={GenerateWhatsappLink({
                  name: product,
                  color: selectedColor,
                  size: selectedSize,
                  variation: selectedVariation,
                  tire: selectedTire,
                  wheels: selectedWheels,
                })}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button className='w-full py-6'>
                  <WhatsappLogo size={21} /> перейти в whatsapp
                </Button>
              </a>
              <Button onClick={close} variant='outline' className='w-full py-6'>
                отменить
              </Button>
            </div>
          </div>
        </div>
        <VisuallyHidden>
          <DrawerTitle></DrawerTitle>
        </VisuallyHidden>
      </DrawerContent>
    </Drawer>
  );
}
