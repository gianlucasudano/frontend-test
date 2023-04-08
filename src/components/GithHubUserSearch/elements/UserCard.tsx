import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { type UserData } from "queries/useGetUser";

function UserCard({
  avatar_url,
  bio,
  html_url,
  login,
  name,
}: Omit<UserData, "repos_url">) {
  const theme = useTheme();
  return (
    <Stack direction="row">
      {/* TODO: resize avatar according mediaquery */}
      <Box>
        <a target="_blank" href={html_url} title={name ? name : login}>
          <Avatar
            src={avatar_url}
            alt={name ? name : login}
            variant="rounded"
            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
          />
        </a>
      </Box>
      <Box sx={{ overflow: "hidden" }} p={1}>
        <Typography variant="body2">
          <em>@{login}</em>
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {bio}
        </Typography>
      </Box>
    </Stack>
  );
}

export default UserCard;
