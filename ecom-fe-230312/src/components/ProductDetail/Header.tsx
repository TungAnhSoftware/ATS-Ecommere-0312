interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return <h1 style={{ fontSize: '45px' }}>{title}</h1>;
};

export default Header;
