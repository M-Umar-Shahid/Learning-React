import {
  AppBar,
  Badge,
  styled,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography vatiant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LLAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Typography variant="span" sx={{ cursor: "pointer" }}>
            John
          </Typography>
        </UserBox>
      </StyledToolbar>
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          Dashboard
        </Button>
        <Menu
          onClose={() => setOpen(false)}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    </AppBar>
  );
}

export default Navigation;
Navigation;
