---
title: "Patents and Homelessness"
slug: "econometrics-patents-homelessness"
date: "2023-05-15"
tags: ["Economics", "Paper"]
description: "Econometric study analyzing the causal relationship between innovation (measured by patents) and homelessness across US states"
---

An econometric investigation testing the hypothesis that higher innovation rates, measured by patent filings, correlate with increased homelessness at the state level—exploring how economic growth and technological advancement impact housing insecurity.

**Course:** EC 15 Econometrics | **Completed:** Spring 2023 | **Collaborator:** Jaden Richardson

## The Hypothesis

As innovation increases in a region (measured by patents filed), does homelessness increase as well? The intuition: patents signal economic growth and productivity, which can drive up cost of living, displace workers, and increase income inequality—all factors contributing to homelessness.

**Goal:** Move beyond correlation to establish whether this relationship is causal.

## Data Overview

**Geographic Scope:** 51 US states/territories (including DC)  
**Time Period:** 2014-2018 (annual observations)  
**Sample Size:** n = 254 (5 years × 51 states, minus missing DC 2018 data)

### Data Sources

**Homelessness:** HUD Annual Homelessness Assessment Report  
**Patents:** Federal Reserve Bank of St. Louis (utility, plant, design, reissue patents by inventor residence)  
**Population:** Census Bureau statistical estimates  
**Home Prices:** Federal Housing Finance Agency House Price Index  
**Education:** Department of Education high school graduation rates  
**Economic Activity:** Bureau of Economic Analysis (GDP, personal expenditures)

### Variable Summary

- **Homeless population:** Mean 10,863 (SD 20,480), Range: 542 to 131,532
- **Patents filed:** Mean 3,172 (SD 6,418), Range: 46 to 46,172
- **Population:** Mean 6.35M (SD 7.17M)
- **House Price Index:** Mean 239.9 (SD 57.8)
- **HS Graduation Rate:** Mean 83.8% (SD 5.2%)
- **GDP:** Mean $369.9B (SD $471.8B)

## Methodology

### Functional Form Selection

**RESET test** rejected linear specification (p < 0.00001), but visual inspection of scatterplot showed strong linearity. Compared log-log, log-linear, and linear-log transformations—**chose linear specification** based on interpretability and graphical fit.

### Omitted Variable Bias Analysis

Systematically added controls to test direction of bias on patent coefficient:

**Population:** Expected positive bias (more people → more patents, more homeless). *Actual: negative bias* (coefficient decreased but stayed positive, suggesting negative correlation with patents).

**Home Prices:** Expected negative bias. *Actual: positive bias*—but coefficient became statistically **insignificant** (p = 0.607-1.112 across specifications), so removed from final model.

**HS Graduation Rate:** Expected negative bias. *Actual: positive bias* (graduation rate negatively correlated with patents—brain drain to other states?).

**GDP:** Expected positive bias. *Confirmed*—adding GDP cut patent coefficient by ~50%.

**Personal Expenditures:** Expected negative bias. *Confirmed*.

### Final Specification (Table 3 in original paper)

```
Homeless = 45,432 + 0.902(Patents) - 0.004(Population) 
           - 54,568(HS Grad Rate) + 0.046(GDP) + 0.058(Personal Exp)
```

All coefficients significant at p < 0.01 except home prices (dropped).  
R² = 0.80+ (explanatory power strong across all models).

## Key Findings

### Patent Effect

**+0.902 homeless people per additional patent filed** (p < 0.001)

Supports hypothesis: innovation proxies for economic activity that increases homelessness through cost-of-living pressures.

### Other Notable Results

**Population:** Negative coefficient (-0.004) counterintuitive but economically negligible—starting from baseline 45,432 homeless with zero housed population, each 1,000 people only reduces homeless by 4.

**HS Graduation Rate:** -545 homeless per percentage point increase—actionable policy insight.

**GDP:** +0.046 homeless per $1M GDP increase—economic growth correlates with housing insecurity.

**Personal Expenditures:** +0.058 homeless per $1M increase—consumer spending (another growth proxy) also correlates with homelessness.

### Robustness: Time Trend

Adding time variable (years since 2014) showed statistically significant **decline in homelessness over time** across all states (federal programs working?), but patent coefficient remained stable—conclusion robust to time trend.

### Beta Coefficients: Relative Importance

Standardized coefficients revealed **patents have smallest effect** relative to graduation rate, expenditures, and population. Policy implication: while innovation matters, education and economic factors matter more.

## Limitations

### Violated OLS Assumptions

**Randomness:** Same states observed multiple times (panel structure) violates independence assumption.  
**Homoskedasticity:** Breusch-Pagan test rejected (p < 0.0001)—used **robust standard errors** to correct.

### Simultaneity / Reverse Causality

Does innovation → homelessness, or does homelessness → less innovation (perception of area as undesirable)? Likely bidirectional. Would need instrumental variables or natural experiment to isolate causal direction.

### Measurement Error

Cannot verify data collection consistency across states—different localities may define/count homelessness differently (temporary housing vs. unsheltered vs. federal assistance recipients).

### External Validity

Results specific to US states, 2014-2018. Different patent laws, housing markets, and social safety nets in other countries limit generalizability.

### Sample Size

Limited to 5 years × 51 states due to data availability—larger panel would improve power.

## Key Takeaways

**Innovation has a dark side.** Economic growth and technological advancement, while beneficial in aggregate, correlate with increased housing insecurity—the gains are not evenly distributed.

**Education is policy-relevant.** High school graduation rate showed the strongest standardized effect and is directly actionable through policy.

**Home prices are surprisingly insignificant.** Despite intuition, house price index showed no statistical relationship with homelessness once other factors controlled—suggests affordability is more complex than raw prices.

**Growth ≠ equity.** Both GDP and personal expenditures (measures of economic prosperity) predict *higher* homelessness, highlighting the paradox of growth without inclusive housing policy.

## Skills Demonstrated

- Econometric modeling (OLS regression, specification testing)
- Hypothesis testing and statistical inference
- Omitted variable bias analysis and control variable selection
- Critical evaluation of assumptions (randomness, homoskedasticity)
- Causal inference challenges (simultaneity, measurement error)
- Data integration from multiple federal sources
- Policy-relevant interpretation of coefficients
- Robustness checks (time trends, standardized coefficients)

This study provides empirical evidence that innovation-driven economic growth, while economically beneficial, creates winners and losers—and without deliberate policy intervention, housing insecurity grows alongside prosperity.

![Econometrics Paper](/pdfs/EconometricsPaper.pdf)
