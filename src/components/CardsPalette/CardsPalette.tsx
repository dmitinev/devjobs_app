import styles from './CardsPalette.module.scss';

export const CardsPalette = () => {
  return (
    <section className={styles.paletteWrapper}>
      <section className={styles.cardsPalette}>
        {/* <Card
          company="Blogr"
          location="New York"
          contract="Full Time"
          postedAt="1w ago"
          position="Senior Software Engineer"
          logo="./assets/logos/blogr.svg"
          logoBackground="#FF8F00"
        />
        <Card
          company="Spoon"
          location="United Kingdom"
          contract="Full Time"
          postedAt="1d ago"
          position="Senior Software Engineer"
          logo="./assets/logos/scoot.svg"
          logoBackground="#D34848"
        />
        <Card
          company="Spoon"
          location="United Kingdom"
          contract="Full Time"
          postedAt="1d ago"
          position="Senior Software Engineer"
          logo="./assets/logos/scoot.svg"
          logoBackground="#D34848"
        />
        <Card
          company="Spoon"
          location="United Kingdom"
          contract="Full Time"
          postedAt="1d ago"
          position="Senior Software Engineer"
          logo="./assets/logos/scoot.svg"
          logoBackground="#D34848"
        />
        <Card
          company="Blogr"
          location="New York"
          contract="Full Time"
          postedAt="1w ago"
          position="Senior Software Engineer"
          logo="./assets/logos/blogr.svg"
          logoBackground="#FF8F00"
        />
        <Card
          company="Spoon"
          location="United Kingdom"
          contract="Full Time"
          postedAt="1d ago"
          position="Senior Software Engineer"
          logo="./assets/logos/scoot.svg"
          logoBackground="#D34848"
        />
        <Card
          company="Spoon"
          location="United Kingdom"
          contract="Full Time"
          postedAt="1d ago"
          position="Senior Software Engineer"
          logo="./assets/logos/scoot.svg"
          logoBackground="#D34848"
        />
        <Card
          company="Spoon"
          location="United Kingdom"
          contract="Full Time"
          postedAt="1d ago"
          position="Senior Software Engineer"
          logo="./assets/logos/scoot.svg"
          logoBackground="#D34848"
        /> */}
      </section>
      <button className={styles.cardsPalette__btnLoad}>Load More</button>
    </section>
  );
};
