// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//       },
//       title: {
//         flexGrow: 1,
//       },
//     menuButton: {
//         marginRight: theme.spacing(2),
//       },
//       buttonBar: {
//         [theme.breakpoints.down('xs')]: {
//           display: 'none',
//         },
    
//         background: 'transparent',
//       },
//       bar: {
//         background: 'rgba(117, 19, 93, 0.77)',
//       },
//     appBar: {
//       borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbar: {
//       flexWrap: 'wrap',
//     },
//     toolbarTitle: {
//       flexGrow: 1,
//     },
//     link: {
//       margin: theme.spacing(1, 1.5),
//     },
//   }));

//   const history = useHistory();
//   const classes = useStyles();
//   const [user, setUser] = useState({})
// <AppBar className={classes.bar} elevation={0}>
//       <Toolbar>
//         <IconButton
//           edge='start'
//           className={classes.menuButton}
//           color='inherit'
//           aria-label='menu'
//         >
//         </IconButton>

//         <Typography variant='h6' className={classes.title}>
//           <Button
//             onClick={() => history.push('/')}
//             style={{ color: 'white' }}
//             variant='text'
//           >
//             Laptop Mania
//           </Button>
//         </Typography>

//         <div className={classes.buttonBar}>
//           <Button
//             onClick={() => history.push('/')}
//             style={{ color: 'white' }}
//             variant='text'
//           >
//             Home
//           </Button>
//           <Button
//             onClick={() => history.push('/order')}
//             style={{ color: 'white' }}
//             variant='text'
//           >
//             Order
//           </Button>
//           <Button
//             onClick={() => history.push('/admin')}
//             style={{ color: 'white' }}
//             variant='text'
//           >
//             Admin
//           </Button>

//           {user?.displayName ? (
//             <>
//               <Button style={{ color: 'white' }} variant='text'>
//                 {user.displayName}
//               </Button>

//               <Button onClick={() => history.push('/login')} style={{ color: 'white' }}>
//                 Sign Out
//               </Button>
//             </>
//           ) : (
//             <Button
//               onClick={() => history.push('/login')}
//               style={{ color: 'white' }}
//               variant='text'
//             >
//               Login
//             </Button>
//           )}
//         </div>
//       </Toolbar>
//     </AppBar>