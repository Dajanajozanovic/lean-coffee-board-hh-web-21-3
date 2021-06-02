import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders text and author', () => {
    render(<Card text="this is a text" author="Jane Doe" />)
    expect(screen.getByText('this is a text', 'Jane Doe')).toBeInTheDocument()
  })
})
