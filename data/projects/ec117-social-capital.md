---
title: "Do Republicans Still Vote Conservatively?"
slug: "ec117-social-capital"
date: "2024-05-15"
tags: ["Economics", "Paper"]
description: "Empirical analysis of social capital measures and their influence on Republican voting patterns at the county level"
---

An empirical study exploring whether Republican voters still align with traditional conservative values by analyzing the relationship between social capital indicators and voting behavior across US counties in the 2016 presidential election.

**Course:** EC 117 Economics of Social Interactions | **Completed:** Spring 2024

## Research Question

Are Republicans still voting in line with conservative values? This paper examines how social characteristics within counties influence voting behavior, specifically testing whether empirical data supports the Republican Party's traditional emphasis on family values, religious community, and social capital.

## Project Overview

Using county-level data from the 2016 presidential election combined with the Social Capital Project's comprehensive measures, this study quantifies the relationship between conservative social indicators and Republican vote share. The analysis moves beyond correlation to explore potential causal relationships and contextual effects in different community sizes.

## Data Sources

**Presidential Returns Data:** County-level voting results from Harvard Dataverse (2000-2020)  
**Social Capital Measures:** US Congress Joint Economic Committee Social Capital Project (2019)  
**Sample Size:** 2,889 counties across the United States

### Key Variables Analyzed

**Social Capital Indices:**
- Family Unity Index (marriage rates, single-parent households, births to unmarried women)
- Community Health Index (civic engagement, volunteerism)
- Institutional Health Index (voting rates, confidence in institutions, census response)
- Collective Efficacy Index (violent crime rates)

**Family Health Sub-indices:**
- Religious congregations per 1,000 people
- Percent of women currently married (ages 35-44)
- Percent of children with single parents
- Percent of births to unmarried women

## Methodology

### Multi-Stage Analysis

**Stage 1: Index-Level Regression**  
Regressed binary county winner (Republican = 1) against four major social capital indices to identify which dimensions matter most.

**Stage 2: Sub-Index Deep Dive**  
Focused on Family Unity Index components to understand specific social indicators driving Republican vote share (continuous variable).

**Stage 3: Network Effects Analysis**  
Split counties by median voter turnout to test whether social capital has stronger effects in smaller, more tightly-knit communities.

## Key Findings

### Major Social Capital Influences

**Family Unity:** Positive correlation (β = 0.08, p < 0.001) - Higher family stability predicts Republican wins  
**Collective Efficacy:** Strong positive correlation (β = 0.09, p < 0.001) - Lower violent crime rates predict Republican wins  
**Institutional Health:** Negative correlation (β = -0.06, p < 0.001) - Lower institutional trust predicts Republican wins  
**Community Health:** No significant effect

### Family Health Components

**Religious Congregations:** +6% Republican vote share per additional congregation per 1,000 people (p < 0.001)  
**Married Women:** +3% Republican vote share per percentage point increase in married women (p < 0.001)  
**Single-Parent Households:** -3% Republican vote share per percentage point increase (p < 0.001)  
**Births to Unmarried Women:** Initially significant but lost significance when other family metrics included (multicollinearity)

### Network Effects (Small vs. Large Counties)

In smaller counties, social capital effects **more than doubled:**
- Religious congregations: 0.03 → 0.07 (133% increase)
- Married women: 0.02 → 0.05 (150% increase)
- Single-parent households: Lost statistical significance in small counties

**Interpretation:** Social capital operates more strongly through peer effects in tight-knit communities where interpersonal networks are denser.

## Key Takeaways

**Republicans vote with their values.** Empirical data confirms Republican counties exhibit higher family unity (traditional marriage, two-parent households) and greater religious engagement—core conservative principles.

**Institutional skepticism is real.** The negative coefficient on Institutional Health validates the Republican "small government" philosophy—counties with lower institutional trust vote more Republican.

**Community size amplifies social influence.** Smaller counties show dramatically stronger relationships between conservative social indicators and Republican voting, suggesting peer effects and community norms matter more in less anonymous settings.

**Religion remains central.** Religious congregations showed consistent, highly significant effects across all model specifications—the strongest predictor among family health sub-indices.

## Limitations & Extensions

**Endogeneity Problem:** Does Republican voting cause these social patterns, or do these patterns cause Republican voting? Likely bidirectional—requires instrumental variable approach or natural experiment for causal identification.

**Key Assumption:** Smaller counties = more social interaction. While intuitive, this was not empirically validated in this study.

**Bandwagon Effects:** Did not control for expected winner or media influence, which could confound results.

## Skills Demonstrated

- Econometric regression analysis (OLS, binary and continuous outcomes)
- Large-scale dataset integration and cleaning (merging voting data with census-derived social metrics)
- Hypothesis testing and model specification
- Interpretation of interaction effects (network effects by county size)
- Critical analysis of endogeneity and causal inference challenges
- Policy-relevant research design

This study provides empirical backing for the longstanding narrative that Republican voters prioritize traditional family structures and religious community—these aren't just campaign talking points, but measurable predictors of voting behavior at scale.

![Economics of Social Interactions Paper](/pdfs/EC117_FinalPaper_TejChhabra_FinalExport.pdf)
