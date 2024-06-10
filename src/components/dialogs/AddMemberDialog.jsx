import { Button, Dialog, DialogTitle, Skeleton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import { samplerUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useAsyncMutation, useErrors } from '../../hooks/hook';
import { useAddGroupMembersMutation, useAvailableFriendsQuery } from '../../redux/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddMember } from '../../redux/reducers/misc';

const AddMemberDialog = ({ chatId }) => {

    const dispatch = useDispatch();
    const { isAddMember } = useSelector((state) => state.misc);

    const { isLoading, data, isError, error } = useAvailableFriendsQuery(chatId);

    useErrors([{ isError, error }]);

    const [addMembers, isLoadingAddMembers] = useAsyncMutation(useAddGroupMembersMutation);

    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {
        setSelectedMembers(prev =>
            prev.includes(id)
                ? prev.filter((currElement) => currElement !== id)
                : [...prev, id]
        );
    };

    const addMemberSubmitHandler = () => {
        addMembers("Adding Members...", { members: selectedMembers, chatId });
        closeHandler();
    };

    const closeHandler = () => {
        dispatch(setIsAddMember(false));
    };

    return (
        <Dialog open={isAddMember} onClose={closeHandler}>
            <Stack p={"2rem"} spacing={"2rem"} width={"20rem"}>
                <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

                <Stack spacing={"1rem"}>
                    {
                        isLoading ? <Skeleton /> : data?.friends?.length > 0 ?
                            (
                                data?.friends?.map(i => (
                                    <UserItem
                                        key={i._id}
                                        user={i}
                                        handler={selectMemberHandler}
                                        isAdded={selectedMembers.includes(i._id)}
                                    />
                                ))
                            )
                            :
                            (
                                <Typography textAlign={"center"}>No Friends</Typography>
                            )
                    }
                </Stack>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                    <Button
                        color='error'
                        onClick={closeHandler}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={addMemberSubmitHandler}
                        variant='contained'
                        disabled={isLoadingAddMembers}
                    >
                        Submit changes
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog;