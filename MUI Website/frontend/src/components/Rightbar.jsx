import {
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant="h6" fontWeight={100} sx={{ fontFamily: "Roboto" }}>
          Online friends
        </Typography>

        <AvatarGroup max={10}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </AvatarGroup>
      </Box>
      <Typography variant="h6" fontWeight={100} sx={{ fontFamily: "Roboto" }}>
        Latest Posts
      </Typography>
      <ImageList cols={3} rowHeight={100} display={"flex"} gap={5}>
        <ImageListItem>
          <img
            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format`}
            alt={"item title"}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format`}
            alt={"item title"}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format`}
            alt={"item title"}
            loading="lazy"
          />
          <img
            src={`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format`}
            alt={"item title"}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

export default Rightbar;
