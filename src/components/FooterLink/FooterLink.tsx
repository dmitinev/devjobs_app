import styles from './FooterLink.module.scss';

interface FooterLinkProps {
  url: string;
}

export const FooterLink = ({ url }: FooterLinkProps) => {
  return (
    <a
      className={styles.footerLink}
      target="_blank"
      rel="noreferrer noopener"
      href={url}
    >
      Apply Now
    </a>
  );
};
