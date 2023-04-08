import { type DataRepo } from 'queries/useGetUser'

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Star from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import RepoForked from "./RepoForkedIcon";
import BoxAlert, { type BoxAlertProps } from "./BoxAlert";

function SingleRepo({
  name,
  html_url,
  stargazers_count,
  forks_count,
}: DataRepo) {
  return (
    <ListItem divider>
      <ListItemText>
        <Typography variant="body2">
          <a href={html_url} target="_blank" title={name}>
            {name}
          </a>
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction sx={{ display: "flex" }}>
        <Star sx={{pr: 0.2}} />
        <Typography variant="body2">{stargazers_count}</Typography>
        <RepoForked />
        <Typography variant="body2">{forks_count}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

const infoArlert: BoxAlertProps = {
  severity: "info",
  message: "No repositories available",
};

function Repos({ dataRepos }: { dataRepos: DataRepo[] }) {
  const theme = useTheme();
  return (
    <Stack gap={1} sx={{ overflowY: "scroll", maxHeight: theme.spacing(40) }}>
      <List>
        <ListItem
          disablePadding
          sx={{ borderBottom: `${theme.spacing(0.2)} solid` }}
        >
          <Typography
            component="h2"
            variant="h6"
            sx={{ fontWeight: theme.typography.fontWeightBold }}
          >
            Repositories
          </Typography>
        </ListItem>
        {dataRepos &&
          dataRepos.length > 0 &&
          dataRepos.map((repo) => <SingleRepo key={repo.name} {...repo} />)}
      </List>
      {dataRepos && dataRepos.length === 0 && <BoxAlert {...infoArlert} />}
    </Stack>
  );
}

export default Repos;
