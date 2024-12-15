// pages/q-and-a.tsx
import React from 'react';
import styles from './../q-and-a/styles/QAndA.module.css';

const QAndA: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section} style={{ top: '201px', left: '465px' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '64px' }}>Q&A (Питання та Відповіді)</div>
      </div>
      <div className={styles.section} style={{ top: '422px', left: '423px' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '48px' }}>Що таке Bridge to Beat?</div>
      </div>
      <div className={styles.section} style={{ top: '587px', left: '25%' }}>
        <div className={styles.sectionText}>
          Beat to Beat – це онлайн-платформа для музикантів та продюсерів, створена для того,
          щоб спростити процес пошуку ідеальних партнерів для спільної роботи.
          Наша місія – об’єднувати музичні таланти для спільного створення нових треків і проєктів.
        </div>
      </div>
      <div className={styles.section} style={{ top: '807px', left: '465px' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '48px' }}>Як створити обліковий запис?</div>
      </div>
      <div className={styles.section} style={{ top: '970px', left: '25%' }}>
        <div className={styles.sectionText}>
          Для створення облікового запису перейдіть на сторінку реєстрації, введіть необхідні дані
          (ім’я, електронну адресу та іншу інформацію) і підтвердіть свою реєстрацію через електронну пошту.
          Після цього ви зможете налаштувати свій профіль.
        </div>
      </div>
      <div className={styles.section} style={{ top: '1190px', left: '25%' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '48px' }}>Як знайти відповідного музиканта або продюсера?</div>
      </div>
      <div className={styles.section} style={{ top: '1353px', left: '25%' }}>
        <div className={styles.sectionText}>
          На Beat to Beat є розширені фільтри, які дозволяють шукати музикантів і продюсерів за жанром, досвідом, та багатьма іншими параметрами.
          Просто введіть свої критерії в пошуку, і ви побачите список відповідних кандидатів.
        </div>
      </div>
      <div className={styles.section} style={{ top: '1573px', left: '25%' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '48px' }}>Як працює система рейтингів і відгуків?</div>
      </div>
      <div className={styles.section} style={{ top: '1736px', left: '25%' }}>
        <div className={styles.sectionText}>
          Після завершення проєкту ви можете залишити відгук і рейтинг для вашого партнера по співпраці.
          Це допомагає іншим користувачам обрати відповідного виконавця або продюсера та сприяє підвищенню рівня довіри на платформі.
        </div>
      </div>
      <div className={styles.section} style={{ top: '1945px', left: '25%' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '48px' }}>Як зв’язатися з іншими користувачами?</div>
      </div>
      <div className={styles.section} style={{ top: '2108px', left: '25%' }}>
        <div className={styles.sectionText}>
          Beat to Beat має систему внутрішніх повідомлень, що дозволяє користувачам зв’язуватися безпосередньо.
          Відвідайте профіль користувача, з яким хочете зв’язатися, і натисніть «Надіслати повідомлення».
        </div>
      </div>
      <div className={styles.section} style={{ top: '2317px', left: '25%' }}>
        <div className={styles.sectionTitle} style={{ fontSize: '48px' }}>Як повідомити про проблему або отримати підтримку?</div>
      </div>
      <div className={styles.section} style={{ top: '2480px', left: '25%' }}>
        <div className={styles.sectionText}>
          Якщо у вас виникли питання або проблеми, ви можете зв’язатися з нашою службою підтримки.
          Відвідайте розділ «Допомога» або напишіть нам на електронну адресу support@beattobeat.com.
        </div>
      </div>
    </div>
  );
}

export default QAndA;
