<div align="center">

# VERACUST
### Voice authenticity. Built for a synthetic-media era.

**The official Veracust website — introducing our mission, product direction, technology and evaluation access.**

[Visit website](https://veracust-website.onrender.com) · [Product Hunt](https://www.producthunt.com/posts/veracust/embed) · [Product repository](https://github.com/veracust-HQ/Veracust-V0.2) · [API documentation](https://veracust-v0-2.onrender.com/docs)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Hosting](https://img.shields.io/badge/Hosting-Render-46E3B7?logo=render&logoColor=black)](https://render.com/)

[![Product Hunt](https://img.shields.io/badge/Product_Hunt-Visit_Veracust-DA552F?style=for-the-badge&logo=producthunt&logoColor=white)](https://www.producthunt.com/posts/veracust/embed)
[![Follow on X](https://img.shields.io/badge/Follow_on_X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Veracust_HQ)
[![Follow on Facebook](https://img.shields.io/badge/Follow_on_Facebook-0866FF?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=61596658978153)
[![Follow on Instagram](https://img.shields.io/badge/Follow_on_Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/veracust_official/)

</div>

---

## About Veracust

AI-generated voices are changing how people communicate—and creating new challenges for trust, security and verification.

**Veracust is developing an audio-authenticity analysis platform** that explores measurable acoustic and signal-level characteristics which may help identify synthetic or manipulated speech. Our mission is to make voice authenticity analysis more accessible to the teams building safer voice-based experiences.

This repository contains the public-facing Veracust marketing website. The product API and analysis service live in the [Veracust product repository](https://github.com/veracust-HQ/Veracust-V0.2).

## Website experience

The website introduces:

- The problem of increasingly convincing synthetic voices.
- Veracust's product vision and research direction.
- A high-level explanation of the audio-analysis approach.
- Product evaluation and API access links.
- Founder and project information.
- Official social and community channels.

## Product links

| Resource | Link |
| --- | --- |
| Official website | https://veracust-website.onrender.com |
| Product dashboard | https://frontend-01-j8w5.onrender.com/ |
| API base | https://veracust-v0-2.onrender.com |
| API documentation | https://veracust-v0-2.onrender.com/docs |
| Product source code | https://github.com/veracust-HQ/Veracust-V0.2 |
| Product Hunt | https://www.producthunt.com/posts/veracust/embed |

Hosted links may be temporarily unavailable when a service is suspended, under maintenance or has exhausted its hosting allowance.

## Technology

The website is built with:

- **Next.js 15** — React framework and application routing.
- **React 19** — component-based user interface.
- **Tailwind CSS 4** — styling and responsive layout.
- **Framer Motion** — interface animation.
- **Lucide React** — interface icons.

## Run locally

### Requirements

- Node.js compatible with the installed Next.js version.
- npm.

### Setup

```bash
git clone https://github.com/veracust-HQ/veracust-website.git
cd veracust-website
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
npm start
```

Run the production build locally before publishing changes.

## Deploy with GitHub and Render

The repository includes a `render.yaml` Blueprint for the website's Render web service. Its current configuration uses:

- Runtime: Node
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Health check: `/`
- Auto-deploy: enabled in the repository's current Render configuration

To connect a deployment:

1. Import this GitHub repository into Render.
2. Select the intended branch and confirm the service settings.
3. Review the build and start commands.
4. Deploy when hosting capacity is available.
5. Check the service's deploy events and health status after publishing.

**Hosting note:** Render deployments consume account resources. If the account's included free instance hours have been exhausted, wait until the allowance refreshes or choose an appropriate paid plan before deploying. A GitHub commit can trigger an automatic Render deployment when auto-deploy is enabled for the connected branch.

## Brand and social channels

- [Product Hunt — Veracust](https://www.producthunt.com/posts/veracust/embed)
- [X](https://x.com/Veracust_HQ)
- [Facebook](https://www.facebook.com/profile.php?id=61596658978153)
- [Instagram](https://www.instagram.com/veracust_official/)

## Product status and responsible claims

Veracust is an early-stage product under active development. The website describes the product's current direction and should not be interpreted as a guarantee of detection accuracy, production readiness, customer adoption, regulatory compliance or a service-level commitment.

Performance and suitability depend on recording conditions, codecs, audio quality, language, speaker variation and the synthesis methods being evaluated. Assess the product on representative data before relying on it in consequential workflows.

## Founder

**Utkarsh Dixit** — Founder, Veracust.

## Contact

For product information, evaluation discussions and commercial enquiries, use the contact details published on the [official website](https://veracust-website.onrender.com).

## License

This repository and its contents are proprietary unless otherwise stated. No rights to use, copy, modify or distribute the website source are granted except as expressly agreed in writing by Veracust.

---

<div align="center">

**Veracust**  
*Your ears can be fooled. Veracust is working to help you look closer.*

</div>
