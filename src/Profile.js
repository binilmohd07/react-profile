import React from 'react';
import {
    Avatar,
    Box,
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Card,
    Grid,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import profilePic from './profile.jpg';
import wiproLogo from '../src/public/logos/wipro.png';
import syncLogo from '../src/public/logos/syncrayons.png';
import rrdLogo from '../src/public/logos/rrd.png';
import vinLogo from '../src/public/logos/vinbytes.png';
import bmResume from '../src/public/Resume-Binil_Mohamed_Nizar.pdf'

const experienceData = [
    {
        title: 'Senior Software Engineer',
        company: 'Wipro Ltd.',
        duration: 'Nov 2021 – Present',
        logo: wiproLogo,
        link: 'https://www.wipro.com',
        responsibilities: [
            'Led a team of 6 engineers to deliver enterprise SaaS tools used by over 20,000 users',
            'Architected CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 50%',
            'Mentored junior developers and instituted code review practices that improved code quality by 30%',
        ]
    },
    {
        title: 'Senior Software Engineer',
        company: 'Syncrayons Technologies Pvt. Ltd.',
        duration: 'Sep 2018 – Nov 2021',
        logo: syncLogo,
        link: 'https://www.syncrayons.com',
        responsibilities: [
            'Migrated legacy monolith to microservices on AWS, improving app scalability and reducing costs by 25%',
            'Built RESTful APIs and integrated GraphQL services for customer-facing applications',
            'Collaborated with product teams to create dashboards using React, Redux, and D3.js',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Vin ByTes Technologies Pvt Ltd.',
        duration: 'Jun 2017 – Aug 2018',
        logo: vinLogo,
        link: 'https://www.vinbytes.com',
        responsibilities: [
            'Developed internal tools using Python and Django to automate reporting and data entry workflows',
            'Improved front-end performance by 40% by optimizing React components and lazy loading modules',
            'Integrated third-party APIs for CRM, analytics, and payment systems',
        ]
    },
    {
        title: 'Process Associate',
        company: 'RR Donnelley India',
        duration: 'Nov 2016 – Dec 2016',
        logo: rrdLogo,
        link: 'https://www.rrd.com',
        responsibilities: [
            'Updated and bug fixed large amounts of user data in UK electoral database using an internal tool',
        ]
    },
];


const Profile = () => {
    const [expanded, setExpanded] = React.useState('summary');
    const handleChange = panel => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {/* Fixed Header */}
            <Box
                component="header"
                sx={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 1200,
                    bgcolor: 'background.paper',
                    borderBottom: '1px solid #e0e0e0',
                    boxShadow: 2,
                    px: 2, py: 1
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <Avatar
                        src={profilePic}
                        alt="Binil Mohamed Nizar"
                        sx={{ width: { xs: 50, sm: 60, md: 80 }, height: { xs: 50, sm: 60, md: 80 } }}
                    />

                    <Box textAlign="center" sx={{ flexGrow: 1, mx: 2 }}>
                        <Typography variant="h6">Binil Mohamed Nizar</Typography>
                        <Typography variant="body1" color="text.secondary">
                            Senior Software Engineer
                        </Typography>
                    </Box>

                    <Box display="flex" gap={1}>
                        <IconButton
                            href="https://github.com/binilmohamed07"
                            target="_blank"
                            size="small"
                            sx={{ border: '1px solid', borderRadius: '50%' }}
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            href="https://linkedin.com/in/binil-mohamed-nizar-033089153"
                            target="_blank"
                            size="small"
                            sx={{ border: '1px solid', borderRadius: '50%' }}
                        >
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            href="mailto:binilmohamed07@gmail.com"
                            size="small"
                            sx={{ border: '1px solid', borderRadius: '50%' }}
                        >
                            <EmailIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            href={bmResume}
                            download
                            size="small"
                            sx={{ border: '1px solid', borderRadius: '50%' }}
                            aria-label="Download Resume"
                        >
                            <DownloadIcon fontSize="small" />
                        </IconButton>

                    </Box>
                </Box>
            </Box>

            {/* Main Content */}
            <Container
                maxWidth="md"
                sx={{ pt: { xs: '140px', sm: '160px' }, pb: 5 }}
            >

                <Card
                    variant="outlined"
                    sx={{
                        border: '1px solid #e0e0e0',
                        boxShadow: 2,
                        bgcolor: 'background.paper'
                    }}
                >
                    {/* Summary Accordion */}
                    <Accordion
                        expanded={expanded === 'summary'}
                        onChange={handleChange('summary')}
                        disableGutters
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Summary</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                8 years of experience building scalable web apps, leading engineering teams, and shipping high-quality software solutions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                    {/* Skills Accordion */}
                    <Accordion
                        expanded={expanded === 'skills'}
                        onChange={handleChange('skills')}
                        disableGutters
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Skills</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                {[
                                    'JavaScript / TypeScript',
                                    'React / Next.js',
                                    'Node.js / Express',
                                    'Python / Django',
                                    'AWS / Docker / CI-CD'
                                ].map(skill => (
                                    <Grid item xs={12} sm={6} md={4} key={skill}>
                                        <Typography>• {skill}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                    {/* Highlights Accordion */}
                    <Accordion
                        expanded={expanded === 'highlights'}
                        onChange={handleChange('highlights')}
                        disableGutters
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Experience Highlights</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText primary="🚀 Led a team of 6 engineers at TechNova to deliver SaaS tools used by 20k+ users" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="🔧 Migrated legacy monolith to microservices, improving load times by 40%" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="📦 Architected CI/CD pipelines with GitHub Actions and Docker" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                    {/* Experience Accordion */}
                    <Accordion
                        expanded={expanded === 'experience'}
                        onChange={handleChange('experience')}
                        disableGutters
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5">Professional Experience</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {experienceData.map((job, idx) => (
                                <Box key={idx} mb={3}>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Box
                                            component="img"
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            sx={{ width: 28, height: 28 }}
                                        />
                                        <Typography variant="h6">
                                            {job.title} —{' '}
                                            <Link href={job.link} target="_blank" underline="hover" fontWeight="medium">
                                                {job.company}
                                            </Link>
                                        </Typography>
                                    </Box>

                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                        {job.duration}
                                    </Typography>
                                    <List dense>
                                        {job.responsibilities.map((item, i) => (
                                            <ListItem key={i} disableGutters>
                                                <ListItemText primary={`• ${item}`} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <Divider />
                </Card>
            </Container>
        </>
    );
};

export default Profile;
