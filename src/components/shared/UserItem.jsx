import React, { memo } from 'react';
import { Avatar, IconButton, ListItem, Stack, Typography, avatarClasses } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const UserItem = ({
    user,
    handler,
    handlerIsLoading,
    isAdded = false,
    styling = {},
}) => {

    const { name, _id, avatar } = user;
    const avatarSrc = Array.isArray(avatar) ? avatar[0] : avatar;

    return (
        <ListItem >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"} {...styling}>
                <Avatar src={avatarSrc} />

                <Typography
                    variant='body1'
                    sx={{
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                >
                    {name}
                </Typography>

                <IconButton
                    size="small"
                    sx={{
                        bgcolor: isAdded ? "error.main" : "primary.main",
                        color: "white",
                        "&:hover": {
                            bgcolor: isAdded ? "error.dark" : "primary.main",
                        },
                    }}
                    onClick={() => handler(_id)}
                    disabled={handlerIsLoading}
                >
                    {isAdded ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem);