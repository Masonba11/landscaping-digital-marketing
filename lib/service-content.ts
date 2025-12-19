/**
 * Fallback content for service pages when WordPress content is not available
 */

export interface ServiceContent {
  title: string;
  h1: string;
  heroHeading: string;
  heroSubheading: string;
  content: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export function getServiceFallbackContent(slug: string): ServiceContent | null {
  const contentMap: Record<string, ServiceContent> = {
    "landscaping-seo": {
      title: "Landscaping SEO | LDM",
      h1: "Landscaping SEO: Get Found When Homeowners Search",
      heroHeading: "Landscaping SEO",
      heroSubheading:
        "Get found on Google when homeowners search for landscaping services. Long-term visibility that generates free traffic month after month.",
      content: `
        <h2>What is Landscaping SEO?</h2>
        <p>Landscaping SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in Google search results when homeowners search for landscaping services in your area. Unlike paid advertising, SEO provides long-term, organic visibility that generates free leads month after month.</p>

        <h2>Why Landscapers Need SEO</h2>
        <p>Most landscaping companies rely on word-of-mouth and referrals. While those are valuable, they limit your growth potential. Here's what happens when you add landscaping SEO to your marketing strategy:</p>

        <ul class="benefits-list">
          <li><strong>Show up in local searches:</strong> When homeowners search "landscaper near me" or "lawn care [your city]", your business appears at the top of results</li>
          <li><strong>Generate free leads:</strong> Unlike paid ads, SEO traffic is free once you rank</li>
          <li><strong>Build long-term visibility:</strong> SEO results compound over time, bringing more leads each month</li>
          <li><strong>Compete with larger companies:</strong> Level the playing field against franchises with bigger ad budgets</li>
          <li><strong>Target high-intent customers:</strong> People searching for landscaping services are ready to hire</li>
        </ul>

        <h2>How Landscaping SEO Works</h2>
        <p>Our landscaping SEO services focus on three key areas:</p>

        <h3>1. Local SEO Optimization</h3>
        <p>We optimize your Google Business Profile, create location-specific content, and build local citations to help you rank for searches like "landscaping services [your city]" and "lawn maintenance near me."</p>

        <h3>2. On-Page SEO</h3>
        <p>We optimize your website's content, titles, meta descriptions, and structure to match what homeowners are searching for. This includes keyword research specific to the landscaping industry.</p>

        <h3>3. Content Marketing</h3>
        <p>We create blog posts, guides, and resources that position you as the local landscaping expert. This content helps you rank for more keywords and builds trust with potential customers.</p>

        <h2>What Makes Our Landscaping SEO Different</h2>
        <p>Unlike generic SEO agencies, we specialize exclusively in landscaping SEO. This means:</p>

        <ul class="benefits-list">
          <li>We understand which keywords actually convert for landscapers (not just ones that sound good)</li>
          <li>We know your seasonal business cycles and plan content accordingly</li>
          <li>We create content that speaks to homeowners' real concerns about their yards</li>
          <li>We track metrics that matter: phone calls, quote requests, and booked jobs—not just website visits</li>
          <li>We have tested what works for landscapers and what does not, so you do not waste money on experiments</li>
        </ul>

        <h2>Landscaping SEO Results</h2>
        <p>Our landscaping SEO clients see:</p>
        <ul class="benefits-list">
          <li>Increased organic traffic from homeowners searching for landscaping services</li>
          <li>More phone calls and quote requests from Google searches</li>
          <li>Higher rankings for local landscaping keywords</li>
          <li>Long-term, sustainable lead generation</li>
        </ul>
      `,
      faqs: [
        {
          question:
            "How long does it take to see results from landscaping SEO?",
          answer:
            "SEO is a long-term strategy. Most landscaping companies start seeing results in 3-6 months, with significant improvements in 6-12 months. Results compound over time as your rankings improve.",
        },
        {
          question: "Will SEO work for my local landscaping business?",
          answer:
            'Yes! Local SEO is especially effective for landscaping companies because homeowners search for services in their specific area. We optimize your website to rank for local searches like "landscaper near me" and "[your city] landscaping services."',
        },
        {
          question: "How much does landscaping SEO cost?",
          answer:
            "SEO pricing varies based on your goals, competition level, and service area. We create custom SEO plans that fit your budget and timeline. Contact us for a free consultation and custom quote.",
        },
      ],
    },
    "landscaping-ads": {
      title: "Landscaping Ads | LDM",
      h1: "Landscaping Ads: Drive Immediate Leads with Paid Advertising",
      heroHeading: "Landscaping Ads",
      heroSubheading:
        "Drive immediate leads with targeted Google Ads campaigns. Start getting phone calls within days of launch.",
      content: `
        <h2>What are Landscaping Ads?</h2>
        <p>Landscaping ads are paid advertising campaigns on Google that target homeowners actively searching for landscaping services. Unlike SEO, paid ads deliver immediate results—you can start getting leads within days of launching your campaign.</p>

        <h2>Why Landscapers Need Paid Advertising</h2>
        <p>While SEO builds long-term visibility, paid advertising fills your schedule faster. Here's why landscaping ads are essential:</p>

        <ul class="benefits-list">
          <li><strong>Immediate results:</strong> Start getting phone calls and quote requests within days of launching</li>
          <li><strong>Target active searchers:</strong> Show up when homeowners are actively looking for landscaping services</li>
          <li><strong>Control your budget:</strong> Set daily or monthly budgets and only pay when someone clicks</li>
          <li><strong>Test and optimize:</strong> Quickly test different messages and offers to find what works best</li>
          <li><strong>Fill seasonal gaps:</strong> Ramp up ads during slow seasons when referrals dry up</li>
        </ul>

        <h2>Types of Landscaping Ads We Manage</h2>

        <h3>1. Google Ads (Search Ads)</h3>
        <p>We create and manage Google Ads campaigns that appear when homeowners search for landscaping services. You only pay when someone clicks your ad, and we optimize campaigns to maximize phone calls and quote requests.</p>

        <h3>2. Google Local Service Ads</h3>
        <p>Local Service Ads appear at the very top of Google search results with a "Google Guaranteed" badge. These ads are especially effective for landscaping companies because they show your phone number prominently and build immediate trust.</p>

        <h2>How Our Landscaping Ads Generate Leads</h2>
        <p>Our paid advertising strategy for landscapers includes:</p>

        <ul class="benefits-list">
          <li><strong>Keyword targeting:</strong> Bid on keywords like "landscaper near me," "lawn care services," and "[your city] landscaping"</li>
          <li><strong>Geographic targeting:</strong> Show ads only to people in your service area</li>
          <li><strong>Ad copy optimization:</strong> Test different headlines and descriptions to maximize clicks and conversions</li>
          <li><strong>Landing page optimization:</strong> Create dedicated pages that convert visitors into leads</li>
          <li><strong>Conversion tracking:</strong> Track phone calls, quote requests, and booked jobs to measure ROI</li>
        </ul>

        <h2>What Makes Our Landscaping Ads Different</h2>
        <p>Most ad agencies treat landscaping companies like any other business. We specialize in landscaping ads, which means:</p>

        <ul class="benefits-list">
          <li>We understand which keywords convert for landscapers (not just ones with high search volume)</li>
          <li>We know your seasonal cycles and adjust campaigns accordingly</li>
          <li>We create ad copy that speaks to homeowners' real concerns about their yards</li>
          <li>We optimize for phone calls and quote requests—not just clicks</li>
          <li>We have tested what works for landscapers and what does not, so you do not waste money</li>
        </ul>

        <h2>Landscaping Ads ROI</h2>
        <p>Our landscaping ad clients typically see:</p>
        <ul class="benefits-list">
          <li>Phone calls and quote requests within days of launch</li>
          <li>Cost per lead that is competitive with other marketing channels</li>
          <li>Increased booked jobs and revenue</li>
          <li>Full transparency on ad spend and results</li>
        </ul>
      `,
      faqs: [
        {
          question: "How quickly will I see results from landscaping ads?",
          answer:
            "Paid advertising delivers immediate results. Most landscaping companies start getting phone calls and quote requests within 1-3 days of launching their campaigns. Results improve as we optimize based on performance data.",
        },
        {
          question: "How much should I spend on landscaping ads?",
          answer:
            "Ad spend depends on your goals, competition, and service area. We typically recommend starting with $1,000-$3,000 per month for local landscaping companies, but we will create a custom budget based on your needs and goals.",
        },
        {
          question: "Will I get quality leads from paid ads?",
          answer:
            "Yes! We optimize our landscaping ad campaigns to target high-intent customers who are actively searching for landscaping services. We track phone calls, quote requests, and booked jobs to ensure you are getting quality leads that convert.",
        },
      ],
    },
    "landscaping-websites": {
      title: "Landscaping Websites | LDM",
      h1: "Landscaping Websites: Professional Websites That Convert Visitors into Customers",
      heroHeading: "Landscaping Websites",
      heroSubheading:
        "Professional websites that showcase your work, load fast, and convert visitors into customers. Mobile-responsive and SEO-optimized.",
      content: `
        <p style="font-size: 1.1rem; color: var(--primary-blue); font-weight: 600; margin-bottom: 2rem; text-align: center;">Most landscaping websites don't generate calls — we fix that.</p>

        <div style="margin-bottom: 2rem;">
          <h2>What is Landscaping Website Development?</h2>
          <p>Landscaping website development is the process of creating a professional, high-converting website specifically designed for landscaping companies. Your website is often the first impression potential customers have of your business, so it needs to showcase your work, build trust, and make it easy for homeowners to request quotes.</p>
        </div>

        <div class="service-features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; max-width: 100%;">
          <div>
            <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.25rem;">Modern Design</h3>
            <p style="margin: 0; font-size: 0.95rem;">Beautiful, modern websites that reflect the quality of your landscaping work. Clean, professional designs built specifically for landscaping companies.</p>
          </div>
          <div>
            <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.25rem;">Mobile-Responsive</h3>
            <p style="margin: 0; font-size: 0.95rem;">More than 60% of homeowners search on mobile. We ensure your website looks perfect and functions flawlessly on phones, tablets, and desktops.</p>
          </div>
          <div>
            <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.25rem;">Fast Loading</h3>
            <p style="margin: 0; font-size: 0.95rem;">Slow websites lose customers. We optimize for speed, ensuring quick loading on all devices. Fast websites also rank better in Google.</p>
          </div>
          <div>
            <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.25rem;">SEO Optimized</h3>
            <p style="margin: 0; font-size: 0.95rem;">Built with SEO in mind from day one. Proper page structure, optimized content, and technical SEO that helps you rank in Google search results.</p>
          </div>
          <div>
            <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.25rem;">Lead Generation</h3>
            <p style="margin: 0; font-size: 0.95rem;">Convert visitors into leads with quote request forms, click-to-call buttons, and clear calls-to-action that make it easy for homeowners to contact you.</p>
          </div>
          <div>
            <h3 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.25rem;">Project Galleries</h3>
            <p style="margin: 0; font-size: 0.95rem;">Showcase your best work with beautiful photo galleries that highlight your landscaping projects and help potential customers visualize what you can do.</p>
          </div>
        </div>

        <div class="service-info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; margin: 2rem 0; max-width: 100%;">
          <div>
            <h2 style="margin-top: 0;">Why You Need a Professional Website</h2>
            <ul class="benefits-list" style="margin: 0;">
              <li><strong>First impression matters:</strong> Homeowners research online before calling</li>
              <li><strong>Showcase your work:</strong> Display before/after photos to build trust</li>
              <li><strong>Generate leads 24/7:</strong> Your website works around the clock</li>
              <li><strong>Build credibility:</strong> Professional website makes you look established</li>
              <li><strong>Mobile-friendly:</strong> Most homeowners search on their phones</li>
            </ul>
          </div>
          <div>
            <h2 style="margin-top: 0;">What's Included</h2>
            <ul class="benefits-list" style="margin: 0;">
              <li>Homepage with hero section and service overview</li>
              <li>Services pages for each landscaping service</li>
              <li>Project gallery with before/after photos</li>
              <li>About page to build trust and credibility</li>
              <li>Contact page with quote request form</li>
              <li>Mobile-responsive design for all devices</li>
              <li>Fast loading speed for better experience</li>
              <li>SEO optimization to rank in Google</li>
              <li>Google Analytics integration</li>
            </ul>
          </div>
        </div>

        <div style="margin: 2rem 0;">
          <h2>What Makes Our Websites Different</h2>
          <p style="margin-bottom: 1rem;">We don't build generic websites. We create landscaping websites specifically designed for your industry with designs that showcase your work effectively, content optimized for landscaping SEO, lead generation features that convert visitors, fast reliable hosting, easy-to-use content management, and ongoing support and maintenance.</p>
        </div>

        <div style="margin: 3rem 0;">
          <h2 style="text-align: center; margin-bottom: 2rem;">Results You'll See</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
            <div class="result-card" style="padding: 1.5rem; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 16px; text-align: center; cursor: pointer; transition: all 0.3s ease; box-shadow: var(--shadow-sm);">
              <div style="font-size: 2rem; font-weight: 800; color: var(--primary-blue); margin-bottom: 0.5rem;">📞</div>
              <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.1rem;">More Quote Requests</h4>
              <p style="margin: 0; font-size: 0.9rem; color: var(--dark-gray);">Increase phone calls and quote requests from website visitors</p>
            </div>
            <div class="result-card" style="padding: 1.5rem; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 16px; text-align: center; cursor: pointer; transition: all 0.3s ease; box-shadow: var(--shadow-sm);">
              <div style="font-size: 2rem; font-weight: 800; color: var(--primary-blue); margin-bottom: 0.5rem;">📈</div>
              <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.1rem;">Better Rankings</h4>
              <p style="margin: 0; font-size: 0.9rem; color: var(--dark-gray);">Improve search engine rankings for local landscaping keywords</p>
            </div>
            <div class="result-card" style="padding: 1.5rem; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 16px; text-align: center; cursor: pointer; transition: all 0.3s ease; box-shadow: var(--shadow-sm);">
              <div style="font-size: 2rem; font-weight: 800; color: var(--primary-blue); margin-bottom: 0.5rem;">⭐</div>
              <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.1rem;">Increased Trust</h4>
              <p style="margin: 0; font-size: 0.9rem; color: var(--dark-gray);">Build credibility and trust with potential customers</p>
            </div>
            <div class="result-card" style="padding: 1.5rem; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 16px; text-align: center; cursor: pointer; transition: all 0.3s ease; box-shadow: var(--shadow-sm);">
              <div style="font-size: 2rem; font-weight: 800; color: var(--primary-blue); margin-bottom: 0.5rem;">🌐</div>
              <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem; font-size: 1.1rem;">Professional Presence</h4>
              <p style="margin: 0; font-size: 0.9rem; color: var(--dark-gray);">Establish a professional online presence that reflects quality</p>
            </div>
          </div>
        </div>

        <div id="examples-of-our-work" style="margin: 3rem 0;">
          <h2 style="text-align: center; margin-bottom: 2rem;">Examples of Our Work</h2>
          <div class="examples-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
            <a href="https://www.queencreekyardpros.com/" target="_blank" rel="noopener noreferrer" class="example-card" style="display: block; padding: 2rem; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 20px; text-decoration: none; transition: all 0.4s ease; box-shadow: var(--shadow-sm);">
              <h3 style="color: var(--primary-blue); margin-bottom: 1rem; font-size: 1.5rem;">Queen Creek Yard Pros</h3>
              <p style="margin: 0; color: var(--dark-gray); line-height: 1.7; margin-bottom: 1rem;">A website we developed to connect homeowners with qualified landscaping contractors in Queen Creek and surrounding areas.</p>
              <div style="color: var(--accent-blue); font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                Visit Website <span style="font-size: 1.2rem;">→</span>
              </div>
            </a>
            <a href="https://www.yardmaintenancequote.com/" target="_blank" rel="noopener noreferrer" class="example-card" style="display: block; padding: 2rem; background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 20px; text-decoration: none; transition: all 0.4s ease; box-shadow: var(--shadow-sm);">
              <h3 style="color: var(--primary-blue); margin-bottom: 1rem; font-size: 1.5rem;">Yard Maintenance Quote</h3>
              <p style="margin: 0; color: var(--dark-gray); line-height: 1.7; margin-bottom: 1rem;">A lead generation platform connecting homeowners with yard maintenance professionals across multiple states.</p>
              <div style="color: var(--accent-blue); font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                Visit Website <span style="font-size: 1.2rem;">→</span>
              </div>
            </a>
          </div>
        </div>

        <div style="margin: 3rem 0; padding: 2rem; background: rgba(0, 102, 255, 0.05); border-radius: 16px;">
          <h2 style="margin-top: 0;">This Is a Good Fit If…</h2>
          <ul class="benefits-list" style="margin: 0;">
            <li>You want more calls or quote requests from your website</li>
            <li>You offer landscaping, lawn care, tree trimming, or yard services</li>
            <li>You're tired of relying only on referrals</li>
            <li>You want something simple that actually works</li>
          </ul>
        </div>

        <div style="margin: 3rem 0;">
          <h2>What Happens After You Submit?</h2>
          <ol style="margin: 0; padding-left: 1.5rem; line-height: 2;">
            <li>We review your business and online presence</li>
            <li>We call you to understand your goals (10–15 minutes)</li>
            <li>We give you clear pricing and next steps — no pressure</li>
          </ol>
        </div>

        <div style="margin: 3rem 0; padding: 2rem; background: rgba(0, 102, 255, 0.05); border-radius: 16px;">
          <h2 style="margin-top: 0;">Not Another Marketing Agency</h2>
          <p style="margin: 0; line-height: 1.8;">We know most landscapers have tried marketing before — SEO that never ranked, ads that didn't convert, or agencies that overpromised. Our approach is simple: build systems that generate calls, track what works, and scale only when results are proven.</p>
        </div>

        <div style="margin: 3rem 0;">
          <h2>Who This Is NOT For</h2>
          <ul class="benefits-list" style="margin: 0;">
            <li>Businesses looking for overnight results</li>
            <li>Landscapers who don't answer phone calls</li>
            <li>Anyone unwilling to follow up with leads</li>
          </ul>
        </div>
      `,
      faqs: [
        {
          question: "How much does a landscaping website cost?",
          answer:
            "Most landscaping websites start at $500 and scale based on pages, services, and features. Exact pricing is provided after a quick call where we understand your specific needs.",
        },
        {
          question: "How fast can my website go live?",
          answer:
            "Most landscaping websites take between 3 days and 2 weeks to complete, depending on the number of pages, content needed, and feedback speed. Simple sites can be launched very quickly, while larger builds may take closer to two weeks.",
        },
        {
          question: "Do I need photos or a logo?",
          answer:
            "No, you don't need anything to get started. We can work with what you have, or help you source professional photos and create a simple logo if needed. We'll discuss your options during our initial call.",
        },
        {
          question: "What if I already have a website?",
          answer:
            "We can work with your existing website or build you a new one. During our call, we'll review your current site and discuss whether a redesign or new build makes more sense for your goals.",
        },
        {
          question: "Is there a contract?",
          answer:
            "We keep things simple. After our initial call, if we're a good fit, we'll provide clear pricing and next steps. No long-term contracts required — just straightforward service that works.",
        },
      ],
    },
    "landscaping-digital-marketing": {
      title: "Landscaping Digital Marketing | LDM",
      h1: "Landscaping Digital Marketing: Grow Your Business with Proven Strategies",
      heroHeading: "Landscaping Digital Marketing",
      heroSubheading:
        "We help landscaping companies attract qualified leads, book more jobs, and grow revenue through targeted online marketing campaigns.",
      content: `
        <p style="font-size: 1.1rem; color: var(--primary-blue); font-weight: 600; margin-bottom: 2rem; text-align: center;">If your website isn't bringing in jobs, it's costing you money.</p>

        <div style="margin-bottom: 2rem;">
          <h2>What is Landscaping Digital Marketing?</h2>
          <p>Landscaping digital marketing is the strategic use of online channels to reach homeowners and commercial property managers who need landscaping services. Unlike generic marketing agencies, we specialize exclusively in the landscaping industry. We understand your seasonal cycles, your local competition, and what makes customers choose one landscaper over another.</p>
          <p>Our approach combines search engine optimization (SEO), paid advertising, website optimization, and content marketing to create a complete system that generates leads year-round.</p>
        </div>

        <h2>Why Landscapers Need Digital Marketing</h2>
        <p>Most landscaping companies rely on word-of-mouth and referrals. While those are valuable, they limit your growth. Here's what happens when you add digital marketing:</p>

        <ul class="benefits-list">
          <li><strong>Fill your schedule faster:</strong> Generate leads even during slow seasons when referrals dry up</li>
          <li><strong>Reach customers actively searching:</strong> Show up when homeowners type "landscaper near me" or "lawn care services"</li>
          <li><strong>Compete with larger companies:</strong> Level the playing field against big franchises with bigger ad budgets</li>
          <li><strong>Build your brand:</strong> Establish your company as the go-to landscaping expert in your area</li>
          <li><strong>Track your ROI:</strong> Know exactly which marketing dollars are bringing in paying customers</li>
        </ul>

        <h2>How Our Landscaping Digital Marketing Generates Leads</h2>

        <h3>1. Search Engine Optimization (SEO)</h3>
        <p>We optimize your website to rank on Google for keywords like "landscaping services [your city]" and "lawn maintenance near me." When homeowners search for landscaping help, your business appears at the top of results—before they even see your competitors.</p>
        <p>Learn more about our <a href="/landscaping-seo">landscaping SEO services</a>.</p>

        <h3>2. Paid Advertising Campaigns</h3>
        <p>We create and manage Google Ads and Facebook Ads campaigns that target homeowners in your service area. You only pay when someone clicks your ad, and we optimize campaigns to maximize phone calls and quote requests.</p>
        <p>Discover how <a href="/landscaping-ads">landscaping ads</a> can drive immediate results.</p>

        <h3>3. Professional Website Design</h3>
        <p>Your website is often the first impression potential customers have of your business. We build fast, mobile-friendly websites that showcase your work, make it easy to request quotes, and convert visitors into leads.</p>
        <p>See our <a href="/landscaping-websites">landscaping website design services</a>.</p>

        <h3>4. Content Marketing</h3>
        <p>We create blog posts, guides, and resources that position you as the local landscaping expert. This content helps you rank for more keywords, builds trust with potential customers, and keeps your website fresh in Google's eyes.</p>

        <h2>What Makes Us Different from Generic Marketing Agencies</h2>
        <p>Most marketing agencies work with dozens of industries. We focus exclusively on landscaping companies. This specialization means:</p>

        <ul class="benefits-list">
          <li>We understand your seasonal business cycles and plan campaigns accordingly</li>
          <li>We know which keywords actually convert (not just ones that sound good)</li>
          <li>We create content that speaks to homeowners' real concerns about their yards</li>
          <li>We track metrics that matter: phone calls, quote requests, and booked jobs—not just website visits</li>
          <li>We've tested what works for landscapers and what doesn't, so you don't waste money on experiments</li>
        </ul>

        <div style="margin: 3rem 0; padding: 2rem; background: rgba(0, 102, 255, 0.05); border-radius: 16px;">
          <h2 style="margin-top: 0;">This Is a Good Fit If…</h2>
          <ul class="benefits-list" style="margin: 0;">
            <li>You want more calls or quote requests from your website</li>
            <li>You offer landscaping, lawn care, tree trimming, or yard services</li>
            <li>You're tired of relying only on referrals</li>
            <li>You want something simple that actually works</li>
          </ul>
        </div>

        <div style="margin: 3rem 0;">
          <h2>What Happens After You Submit?</h2>
          <ol style="margin: 0; padding-left: 1.5rem; line-height: 2;">
            <li>We review your business and online presence</li>
            <li>We call you to understand your goals (10–15 minutes)</li>
            <li>We give you clear pricing and next steps — no pressure</li>
          </ol>
        </div>

        <div style="margin: 3rem 0; padding: 2rem; background: rgba(0, 102, 255, 0.05); border-radius: 16px;">
          <h2 style="margin-top: 0;">Not Another Marketing Agency</h2>
          <p style="margin: 0; line-height: 1.8;">We know most landscapers have tried marketing before — SEO that never ranked, ads that didn't convert, or agencies that overpromised. Our approach is simple: build systems that generate calls, track what works, and scale only when results are proven.</p>
        </div>

        <div style="margin: 3rem 0;">
          <h2>Who This Is NOT For</h2>
          <ul class="benefits-list" style="margin: 0;">
            <li>Businesses looking for overnight results</li>
            <li>Landscapers who don't answer phone calls</li>
            <li>Anyone unwilling to follow up with leads</li>
          </ul>
        </div>
      `,
      faqs: [
        {
          question: "How much does landscaping digital marketing cost?",
          answer:
            "Pricing varies based on your goals, competition level, and service area. Most landscaping clients invest between $1,500–$3,000/month depending on market competition. We'll create a custom plan that fits your budget during our initial call.",
        },
        {
          question: "How quickly will I see results?",
          answer:
            "Paid advertising can deliver phone calls within days of launch. SEO results typically start appearing in 3-6 months and compound over time. We'll discuss realistic timelines based on your specific situation during our call.",
        },
        {
          question: "Do I need a website first?",
          answer:
            "Not necessarily. We can help you build a website as part of your digital marketing package, or work with your existing site. We'll review your current online presence and recommend the best approach for your goals.",
        },
        {
          question: "Will this work for my local landscaping business?",
          answer:
            "Yes! Local digital marketing is especially effective for landscaping companies because homeowners search for services in their specific area. We optimize everything to target your service area and generate local leads.",
        },
        {
          question: "Is there a contract?",
          answer:
            "We keep things simple. After our initial call, if we're a good fit, we'll provide clear pricing and next steps. No long-term contracts required — just straightforward service that works.",
        },
      ],
    },
  };

  return contentMap[slug] || null;
}
