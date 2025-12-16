import Link from "next/link";

export default function CaseStudy() {
  return (
    <section id="case-study" className="case-study">
      <div className="container">
        <div className="case-study-content">
          <h2 className="case-study-title">
            Real Results: The Yard Experts Case Study
          </h2>

          <div className="case-study-intro">
            <p>
              When we began working with The Yard Experts, a landscaping company
              in Queen Creek, AZ, they were averaging roughly 5 to 9 leads per
              month from Google. Despite offering strong local services, their
              website was not ranking for the terms that mattered most, and
              their ad spend was not producing consistent results. Our goal was
              to completely restructure their online presence, optimizing both
              paid and organic channels, to create a predictable, scalable
              system that generated real inbound leads, not just clicks.
            </p>
          </div>

          <div className="case-study-results">
            <div className="results-highlight">
              <h3>Results in 6 Months</h3>
              <div className="results-number">360+</div>
              <p className="results-label">High-Quality Leads Acquired</p>
            </div>
          </div>

          <div className="case-study-process">
            <h3>How We Did It</h3>

            <div className="process-step">
              <h4>1. Data Analysis & Campaign Restructuring</h4>
              <p>
                The first step was analyzing their data through Google Ads, GA4,
                and Search Console. We noticed that much of their budget was
                being spent on irrelevant or low-intent searches due to overly
                broad targeting. We rebuilt their Google Ads campaign from
                scratch, focusing on exact and phrase match keywords tied
                directly to their revenue-driving services like tree trimming,
                yard cleanup, and lawn maintenance. We also developed a robust
                negative keyword list to filter out non-commercial queries such
                as &quot;jobs,&quot; &quot;DIY,&quot; or &quot;consulting.&quot;
                This shift immediately improved ad efficiency, driving
                higher-quality traffic without increasing budget.
              </p>
            </div>

            <div className="process-step">
              <h4>2. Local SEO Optimization</h4>
              <p>
                Once the paid structure was refined, we turned to local SEO. The
                Yard Experts already had service-area pages, but they were not
                fully optimized for geographic relevance. Using SEMrush, we
                conducted keyword research across all surrounding markets,
                including Queen Creek, Gilbert, Chandler, Mesa, and San Tan
                Valley, to identify what people were actually searching for in
                each city. From there, we created service-city pages that
                strategically combined their services with those
                location-specific keywords (for example, &quot;Tree Trimming
                Gilbert AZ&quot; or &quot;Landscape Maintenance Chandler
                AZ&quot;). These new pages were internally linked to the
                existing service-area structure, ensuring Google could crawl and
                index them as a unified network of local authority pages.
              </p>
            </div>

            <div className="process-step">
              <h4>3. On-Page SEO & Conversion Optimization</h4>
              <p>
                We also refined their on-page SEO by writing optimized H1s, meta
                descriptions, and FAQ sections for each city page. Each page
                featured unique CTAs, high-quality visuals, and schema markup to
                boost click-through rates. We then integrated reviews and trust
                signals directly on the pages to help convert visitors once they
                landed. These updates made The Yard Experts stand out not just
                in rankings, but in conversion performance, turning page views
                into booked jobs.
              </p>
            </div>

            <div className="process-step">
              <h4>4. Paid Advertising Strategy</h4>
              <p>
                On the paid side, we implemented Google Ads and Local Services
                Ads (LSAs) simultaneously. We structured ad groups by location
                and service, wrote ad copy emphasizing reliability and
                family-owned values, and tested multiple responsive ad
                variations. The campaign ran at an efficient $55/day spend,
                maintaining an average CPC of about $5 to $6 while steadily
                improving conversion rates. We tracked all performance metrics
                through GA4 and SEMrush, allowing us to attribute leads to exact
                keywords, ad groups, and landing pages with precision.
              </p>
            </div>
          </div>

          <div className="case-study-media">
            <h3>Proof of Results</h3>

            <div className="before-after-comparison">
              <div className="comparison-item">
                <img
                  src="/6monthsbefore.png"
                  alt="6 Months Before - Starting Point"
                  className="comparison-image"
                />
                <p className="comparison-caption">6 Months Before</p>
              </div>

              <div className="comparison-item">
                <img
                  src="/6monthsafter.png"
                  alt="6 Months After - Results Dashboard"
                  className="comparison-image"
                />
                <p className="comparison-caption">6 Months After</p>
              </div>
            </div>

            <div className="media-grid">
              <div className="media-item">
                <img
                  src="/theyardexpertsalltimegoogleads.png"
                  alt="Google Ads Performance - Clicks and Conversions"
                  className="case-study-image"
                />
                <p className="media-caption">
                  Google Ads Performance: 1.99K Clicks, 217.56 Conversions
                </p>
              </div>

              <div className="media-item">
                <img
                  src="/googlevisability.webp"
                  alt="Google Visibility Growth"
                  className="case-study-image"
                />
                <p className="media-caption">Google Visibility Growth</p>
              </div>
            </div>

            <div className="video-section">
              <div className="video-item">
                <h4>How We Did It</h4>
                <video
                  controls
                  className="case-study-video"
                  width="100%"
                  height="auto"
                >
                  <source src="/howwedidit.MOV" type="video/quicktime" />
                  <source src="/howwedidit.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="video-item">
                <h4>Client Testimony</h4>
                <video
                  controls
                  className="case-study-video"
                  width="100%"
                  height="auto"
                >
                  <source src="/testimony.MOV" type="video/quicktime" />
                  <source src="/testimony.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="case-study-cta">
            <h3>Ready to See Similar Results for Your Landscaping Business?</h3>
            <p>
              We specialize in helping landscaping companies generate
              predictable, high-quality leads through proven digital marketing
              strategies. Let us show you how we can transform your online
              presence.
            </p>
            <Link href="/contact" className="cta-button">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
