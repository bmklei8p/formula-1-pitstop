import Home from '../app/components/Home.jsx';
import { render, screen } from "@testing-library/react";


describe('Home Page', () => {
  it('should show text: home', () => {
    render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  it('should not show text: hello', () => {
    render(<Home />);
    expect(screen.queryByText('hello')).not.toBeInTheDocument();
  });
});