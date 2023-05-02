import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const items = [
  {
    key: '/jsx',
    label: 'JSX',
  },
]

const Nav = () => {
  const navigate = useNavigate()
  const onClick = (e) => {
    navigate(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['/jsx']}
      mode="inline"
      items={items}
    />
  )
}
export default Nav
