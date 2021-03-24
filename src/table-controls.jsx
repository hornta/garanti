import {
	Checkbox,
	FormControlLabel,
	Grid,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectTableGroupLast,
	selectTableMinGroup,
	selectTableMinU,
} from './selectors.js';
import {
	changeTableMinGroup,
	changeTableMinU,
	toggleTableGroupLast,
} from './actions.js';
import { WorkerContext } from './workers/worker-manager.jsx';

const useStyles = makeStyles((theme) => ({
	spaceBelow: {
		marginBottom: theme.spacing(2),
	},
	resetBtn: {
		float: 'right',
	},
	copyKeysBtn: {
		float: 'right',
	},
}));

export const TableControls = () => {
	const classes = useStyles();

	const minGroup = useSelector(selectTableMinGroup);
	const minU = useSelector(selectTableMinU);
	const groupLast = useSelector(selectTableGroupLast);

	const dispatch = useDispatch();

	const handleChangeTableMinGroup = (event) => {
		dispatch(changeTableMinGroup(Number(event.target.value)));
	};

	const handleChangeTableMinU = (event) => {
		dispatch(changeTableMinU(Number(event.target.value)));
	};

	const handleChangeTableCollapseLast = () => {
		dispatch(toggleTableGroupLast());
	};

	const createTable = useContext(WorkerContext);
	useEffect(() => {
		createTable();
	}, [dispatch, minGroup, minU, groupLast]);

	return (
		<>
			<Typography variant="h6" component="h2" gutterBottom>
				Tabellinställningar
			</Typography>
			<Grid container>
				<Grid item>
					<TextField
						className={classes.spaceBelow}
						label="Ner till vinstgrupp"
						select
						fullWidth
						SelectProps={{
							native: true,
						}}
						value={minGroup}
						onChange={handleChangeTableMinGroup}
					>
						{[...Array(14).keys()].map((value) => (
							<option key={value} value={value}>
								{value}
							</option>
						))}
					</TextField>
					<TextField
						className={classes.spaceBelow}
						label="Minsta U-tecken"
						select
						fullWidth
						SelectProps={{
							native: true,
						}}
						value={minU}
						onChange={handleChangeTableMinU}
					>
						{[...Array(14).keys()].map((value) => (
							<option key={value} value={value}>
								{value}
							</option>
						))}
					</TextField>
					<FormControlLabel
						control={
							<Checkbox
								checked={groupLast}
								onChange={handleChangeTableCollapseLast}
								color="primary"
							/>
						}
						label="Gruppera lägsta vinstgruppen"
					/>
				</Grid>
			</Grid>
		</>
	);
};
