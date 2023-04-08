import { createSvgIcon } from "@mui/material/utils";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const RepoForked = createSvgIcon(
  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>,
  "Forked Repo"
);

export default function CreateSvgIcon() {
  const theme = useTheme();
  const translateValue = theme.spacing(0.5);
  return (
    <Box
      sx={{
        "& > :not(style)": {
          transform: `translate(${translateValue}, ${translateValue}) scale(1.2)`,
        },
      }}
    >
      <RepoForked />
    </Box>
  );
}
