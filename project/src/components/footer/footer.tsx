import Logo from '../../components/logo/logo';


type FooterProps = {
  isMain?: boolean,
}

function Footer(props: FooterProps): JSX.Element {
  const { isMain } = props;

  return (
    <footer className="page-footer">
      <Logo
        isFooter
        isMain={isMain}
      />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
