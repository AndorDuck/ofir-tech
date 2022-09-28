import { AppBar, Box, Container, Divider, Stack } from '@mui/material'
import Head from 'next/head'

import SanitizeHtml from '../components/SanitizeHtml'
import { AdHeader } from '../components/AdHeader'
import { AdHeaderControls } from '../components/AdHeaderControls'
import { getDateDiffInDays } from '../utils/DateUtils'

export default function Home({ data }) {

    const {
        id,
        heading,
        description,
        titles,
        summary,
        hiring_company: hiringCompany,
        work_time: workTime,
        valid_from: validFrom,
        valid_to: validTo,
        locations
    } = data

    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": titles?.[0]?.name,
        "description": summary,
        "identifier": {
            "@type": "PropertyValue",
            "name": hiringCompany?.name,
            "value": hiringCompany?.id
        },
        "datePosted": validFrom,
        "validThrough": validTo,
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": locations?.[0]?.country
        },
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": hiringCompany?.name,
            // "sameAs": "http://www.google.com",
            "logo": hiringCompany?.logo_url
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": locations?.[0]?.location?.formatted_address,
                "addressLocality": locations?.[0]?.location?.area?.type,
                "addressRegion": locations?.[0]?.location?.area?.name,
                "postalCode": locations?.[0]?.location?.post_code,
                "addressCountry": locations?.[0]?.location?.country
            }
        },
    }

    const today = new Date()
    const validFromDate = new Date(validFrom)
    const dateDiff = getDateDiffInDays(validFromDate, today)

    return (
        <>
            <Head>
                <title>{heading}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            </Head>

            <Container sx={{ paddingBottom: 4 }}>
                <Stack spacing={4}>
                    <Box>
                        <AppBar elevation={0} position='static'>
                            <AdHeaderControls dateDiff={dateDiff}></AdHeaderControls>
                            <Box sx={{ width: '100%' }}>
                                <AdHeader id={id} heading={heading} hiringCompany={hiringCompany} workTime={workTime} locations={locations} dateDiff={dateDiff}></AdHeader>
                            </Box>
                        </AppBar>
                    </Box>

                    <Divider />

                    <Box>
                        <SanitizeHtml html={description} />
                    </Box>

                </Stack>
            </Container>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://supernova-development.herokuapp.com/api/jobs/1997317/')
    const data = await res.json()

    return { props: { data } }
}
