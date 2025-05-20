export default function PrivacyPolicyPage() {
  return (
    <main className='max-w-3xl mx-auto text-neutral-800'>
      <h1 className='text-3xl font-semibold mb-2'>
        Политика конфиденциальности
      </h1>
      <p className='text-sm text-neutral-500 mb-8'>
        Актуально с: 18 мая 2025 г.
      </p>

      <p className='mb-6'>
        На сайте <strong>www.weel.kz</strong> мы уважаем вашу конфиденциальность
        и стараемся быть максимально прозрачными в том, как обрабатываем
        информацию.
      </p>

      <h2 className='text-xl font-semibold mb-2'>
        1. Какие данные мы собираем
      </h2>
      <ul className='list-disc list-inside mb-6 space-y-1 text-neutral-700'>
        <li>IP-адрес</li>
        <li>тип устройства и браузера</li>
        <li>геолокация (приблизительная)</li>
        <li>
          действия на сайте (клики, переходы между страницами, длительность
          сессии)
        </li>
      </ul>
      <p className='mb-6'>
        Эти данные не позволяют идентифицировать вас лично и используются
        исключительно в агрегированном виде.
      </p>

      <h2 className='text-xl font-semibold mb-2'>2. Инструменты аналитики</h2>
      <p className='mb-2'>Мы используем следующие сервисы:</p>
      <ul className='list-disc list-inside mb-6 space-y-1 text-neutral-700'>
        <li>
          Google Analytics —{' '}
          <a
            href='https://policies.google.com/privacy'
            className='text-blue-500 underline'
            target='_blank'
          >
            подробнее о политике Google
          </a>
        </li>
        <li>
          Яндекс.Метрика —{' '}
          <a
            href='https://yandex.ru/legal/confidential/'
            className='text-blue-500 underline'
            target='_blank'
          >
            подробнее о политике Яндекса
          </a>
        </li>
      </ul>
      <p className='mb-6'>
        Эти сервисы могут использовать cookies и технологии отслеживания для
        сбора статистики и анализа поведения на сайте.
      </p>

      <h2 className='text-xl font-semibold mb-2'>
        3. Зачем мы собираем данные
      </h2>
      <ul className='list-disc list-inside mb-6 space-y-1 text-neutral-700'>
        <li>Чтобы понять, как люди используют сайт</li>
        <li>Чтобы улучшать контент и интерфейс</li>
        <li>Чтобы анализировать интерес к товарам и категориям</li>
      </ul>

      <h2 className='text-xl font-semibold mb-2'>
        4. Хранение и передача данных
      </h2>
      <p className='mb-6'>
        Мы не передаём ваши данные третьим лицам, кроме вышеуказанных сервисов
        аналитики. Мы не собираем пароли, номера карт и другую чувствительную
        информацию.
      </p>

      <p className='mt-10 text-sm text-neutral-600'>
        Если у вас остались вопросы по конфиденциальности — свяжитесь с нами по
        email:{' '}
        <a href='mailto:diasuses@proton.me' className='text-blue-500 underline'>
          diasuses@proton.me
        </a>
      </p>
    </main>
  );
}
