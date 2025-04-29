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
    CardContent,
    Link,
    Grid
} from '@mui/material';
import profilePic from './profile.jpg';

const experienceData = [
    {
        title: 'Senior Software Engineer',
        company: 'Wipro Ltd.',
        duration: 'Nov 2021 – Present',
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
        responsibilities: [
            'Migrated legacy monolith to microservices on AWS, improving app scalability and reducing costs by 25%',
            'Built RESTful APIs and integrated GraphQL services for customer-facing applications',
            'Collaborated with product teams to create dashboards using React, Redux, and D3.js',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Vin Bytes Technologies Pvt. Ltd.',
        duration: 'Jun 2017 – Aug 2018',
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
        responsibilities: [
            'Updated and bug fixed large amounts of user data in UK electoral database using an internal tool',
        ]
    },
];

const Profile = () => {
    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Card variant="outlined" sx={{ p: 3 }}>
                {/* Header Section */}
                <Box textAlign="center" mb={5}>
                    <Avatar
                        src={profilePic}
                        alt="Binil Mohamed Nizar"
                        sx={{
                            width: { xs: 100, sm: 120 },
                            height: { xs: 100, sm: 120 },
                            mx: 'auto',
                            mb: 2
                        }}
                    />
                    <Typography variant="h4" sx={{ fontSize: { xs: 24, sm: 32 } }}>
                        Binil Mohamed Nizar
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Senior Software Engineer
                    </Typography>
                    <Typography variant="body1" mt={2}>
                        8 years of experience building scalable web apps, leading engineering teams, and shipping high-quality software solutions.
                    </Typography>
                </Box>

                {/* Skills */}
                <Divider sx={{ my: 4 }} />
                <Box mb={4}>
                    <Typography variant="h5" gutterBottom>Skills</Typography>
                    <Grid container spacing={2}>
                        {[
                            'JavaScript / TypeScript',
                            'React / Next.js',
                            'Node.js / Express',
                            'Python / Django',
                            'AWS / Docker / CI-CD'
                        ].map(skill => (
                            <Grid item xs={12} sm={6} md={4} key={skill}>
                                <Typography variant="body1">• {skill}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Highlights */}
                <Divider sx={{ my: 4 }} />
                <Box mb={4}>
                    <Typography variant="h5" gutterBottom>Experience Highlights</Typography>
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
                </Box>

                {/* Professional Experience */}
                <Divider sx={{ my: 4 }} />
                <Box mb={4}>
                    <Typography variant="h5" gutterBottom>Professional Experience</Typography>
                    {experienceData.map((job, index) => (

                        <CardContent>
                            <Typography variant="h6">
                                {job.title} — <Box component="span" fontWeight="fontWeightMedium">{job.company}</Box>
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                {job.duration}
                            </Typography>
                            <List dense>
                                {job.responsibilities.map((item, idx) => (
                                    <ListItem key={idx} disableGutters>
                                        <ListItemText primary={`• ${item}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>

                    ))}
                </Box>

                {/* Contact */}
                <Divider sx={{ my: 4 }} />
                <Box>
                    <Typography variant="h5" gutterBottom>Contact</Typography>
                    <Typography>
                        Email: <Link href="mailto:binilmohamed07@gmail.com">binilmohamed07@gmail.com</Link>
                    </Typography>
                    <Typography>
                        LinkedIn: <Link href="https://linkedin.com/in/binil-mohamed-nizar-033089153" target="_blank" rel="noreferrer">View Profile</Link>
                    </Typography>
                    <Typography>
                        GitHub: <Link href="https://github.com/binilmohamed07" target="_blank" rel="noreferrer">github.com/binilmohamed07</Link>
                    </Typography>
                </Box>
            </Card>
        </Container>
    );
};

export default Profile;
