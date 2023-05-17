import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    InputBase,
    Modal,
    ImageList,
    ImageListItem,
    ImageListItemBar
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import UploadImage from '../../../assets/icons/UploadImage';
import UploadVideo from '../../../assets/icons/UploadVideo';
import UploadMore from '../../../assets/icons/UploadMore';
import UserGroup from '../../../assets/icons/UserGroup';
import Schedule from '../../../assets/icons/Schedule';
import Global from '../../../assets/icons/Global';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';
import { FeedItem } from "./FeedItem";

const modalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    border: 0,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    outline: 'none',
    maxHeight: 800,
    overflowY: 'auto'
};

const childmodalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    border: 0,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    outline: 'none'
};

interface PostCardProps {
	showModal: boolean,
	data: any,
	hideModal: (e?: any) => void,
	repostPopup?: boolean
}

const PostCards = ({ showModal, data, hideModal, repostPopup = false }: PostCardProps) => {
	const [editorText, setEditorText] = useState<string>("");
	const [assetArea, setAssetArea] = useState<string[]>([]);
	const [open, setOpen] = React.useState(false);
	const [type, setType] = useState<string>('Connections')

    const TypeData = [{ name: 'Connections' }, { name: 'Anyone on Jobfactor' }];

    const reset = () => {
        setEditorText('');
        setAssetArea([]);
    };

    const inputref = React.useRef<HTMLInputElement>(null);

    const onChangeImage = (e: any) => {
        let temp: any = [];
        for (let i = 0; i < e.target.files?.length; i++) {
            temp.push(URL.createObjectURL(e.target.files[i]));
        }
        setAssetArea([...assetArea, ...temp]);
    };

    const onPostData = async () => {
        let temp = {
            profileImage: data?.userimage,
            fullName: data?.username,
            jobTitle: 'Digital Marketer',
            description: editorText,
            views: 1852,
            likes: 150,
            comments: 236,
            shares: 55,
            images: assetArea,
            isAccountVerified: true
        };
        localStorage.setItem('feedsdata', JSON.stringify(temp));
        hideModal();
        window.location.reload();
        reset();
    };


	const onDeletImage = async (item: any) => {
		const filterdata = assetArea?.filter((x: any) => x !== item)
		setAssetArea(filterdata)
	}

	const ChildModal = () => {
		return (
			<React.Fragment>
				<Modal
					open={open}
					onClose={() => { setOpen(false) }}
					aria-labelledby="child-modal-title"
					aria-describedby="child-modal-description"
				>
					<Box sx={{ ...childmodalstyle }}>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 0, borderBottomWidth: 1, borderBottomColor: '#CCC', borderStyle: 'solid', marginBottom: 2, paddingBottom: 1 }}>
							<Box>
								<h4 style={{ marginTop: 0, marginBottom: 0 }}>Choose audience</h4>
							</Box>
							<Box>
								<div style={{ cursor: 'pointer' }} onClick={() => { setOpen(false) }}>
									<CancelIcon style={{ color: '#808080' }} />
								</div>
							</Box>
						</Box>
						{TypeData?.map((item, index) => {
							return (
								<Box key={index + 2} sx={{ display: 'flex', alignItems: 'center', border: 0, borderBottomWidth: 1, borderBottomColor: '#CCC', borderStyle: 'solid', marginBottom: 2, paddingBottom: 1, cursor: 'pointer' }} onClick={() => { setType(item?.name); setOpen(false) }}>
									<Box>
										{index === 0 ?
											<UserGroup />
											:
											<Global />
										}
									</Box>
									<Box>
										<h4 style={{ marginTop: 0, marginBottom: '7px', paddingLeft: 10, fontWeight: '400' }}>{item?.name}</h4>
									</Box>
								</Box>
							)
						})}
					</Box>
				</Modal>
			</React.Fragment>
		);
	}

	return (
		<Modal
			open={showModal}
			onClose={hideModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={modalstyle}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 0, borderBottomWidth: 1, borderBottomColor: '#CCC', borderStyle: 'solid', marginBottom: 2, paddingBottom: 1 }}>
					<Box>
						<h4 style={{ marginTop: 0, marginBottom: 0 }}>Create a Post</h4>
					</Box>
					<Box>
						<div style={{ cursor: 'pointer' }} onClick={hideModal}>
							<ClearIcon />
						</div>
					</Box>
				</Box>
				<Box sx={{ maxHeight: '55vh', overflow: 'auto', background: repostPopup ? '#FCFBF8' : 'transparent' }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
						<Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
							<img height={65} width={65} src={data?.userimage ?? data?.profileImage} alt="icon" style={{ borderRadius: 100 }} />
							<Box sx={{ cursor: 'pointer' }} onClick={() => { setOpen(true) }}>
								<h4 style={{ margin: 0 }}>{data?.username ?? data?.fullName}</h4>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', borderWidth: 1, borderColor: '#CCC', borderStyle: 'solid', padding: '4px 12px', borderRadius: 5, marginTop: '5px' }}>
									{type === 'Connections' ? <UserGroup /> : <Global />}
									<h5 style={{ margin: 0, fontWeight: '400' }}>{type}</h5>
									<ArrowDropDownIcon />
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
								color: '#05668D',
								height: 'fit-content',
								borderRadius: '5px',
								background: '#fcfbf8',
								padding: '10px 20px',
								fontSize: '14px',
								gap: '8px',
								fontWeight: "600"

							}}
						>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="photo"
								sx={{ padding: 0 }}
								disabled={true}

							>
								<Schedule />
							</IconButton>
							Schedule
						</Box>
					</Box>
					<Box sx={{ marginTop: '24px' }}>
						<InputBase
							rows={5}
							placeholder="What’s happening?"
							sx={{
								backgroundColor: '#FCFBF8',
								width: '100%',
								overflowY: 'auto',
								padding: 0,
								paddingTop: '24px',
								paddingLeft: '32px',
								fontFamily: 'open sans',
								color: '#23282B'
							}}
							onChange={(e) => { setEditorText(e.target.value) }}
							multiline
						/>
					</Box>

					{assetArea?.length > 0 &&
						<Box sx={{ padding: '20px', background: '#fcfbf8' }}>
							<ImageList
								sx={{
									width: '100%',
									height: 250,
									transform: 'translateZ(0)',
								}}
								rowHeight={200}
								gap={12}
							>
								{assetArea.map((item: any, index: number) => {
									const cols = item?.featured ? 2 : 1;
									const rows = item?.featured ? 2 : 1;
									return (
										<ImageListItem sx={{ objectFit: 'fill', overflow: 'hidden' }} key={index + 2} cols={cols} rows={rows}>
											<img
												src={item}
												alt={'images'}
												loading="lazy"
												style={{ objectFit: 'fill' }}
											/>
											<ImageListItemBar
												sx={{
													background: '#ffffff0d',
												}}
												position="top"
												actionIcon={
													<div style={{ cursor: 'pointer', padding: 10 }} onClick={() => { onDeletImage(item) }}>
														<CancelIcon />
													</div>
												}
												actionPosition="left"
											/>
										</ImageListItem>
									);
								})}
							</ImageList>
						</Box>
					}

					{
						repostPopup ?
							<Box
								sx={{
									background: '#F2F2F2',
									border: "1px solid #C5C5C5",
									borderRadius: '12px',
									ml: '32px',
									mr: '32px'
								}}
							>
								<FeedItem feed={data} />
							</Box>
							: null
					}
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingLeft: '15px',
						marginTop: '30px'
					}}
				>
					<Box sx={{ display: 'flex', gap: '20px' }}>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
								gap: '5px',

							}}
							onClick={() => { inputref.current?.click() }}
						>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="photo"
								sx={{
									backgroundColor: '#FCFBF8',
									borderRadius: '5px'
								}}
							>
								<UploadImage />
								<input type="file" ref={inputref} multiple accept="image/jpg, image/jpeg, image/png" name="image" id="imageFile" onChange={(e) => { onChangeImage(e) }} style={{ display: 'none' }} />
							</IconButton>
						</Box>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
								gap: '5px'
							}}
						>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="photo"
								sx={{
									backgroundColor: '#FCFBF8',
									borderRadius: '5px'
								}}
								disabled={true}
							>
								<UploadVideo />
							</IconButton>
						</Box>
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
								gap: '5px'
							}}
						>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="photo"
								sx={{
									backgroundColor: '#FCFBF8',
									borderRadius: '5px'
								}}
								disabled={true}
							>
								<UploadMore />
							</IconButton>
						</Box>
					</Box>
					<Button variant="contained" sx={{ maxWidth: 100, py: 1 }} onClick={() => { onPostData() }}>
						Post
					</Button>
				</Box>
				<Box>
					<ChildModal />
				</Box>
			</Box>
		</Modal >
	)
}

export default PostCards;
