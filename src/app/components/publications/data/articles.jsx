// data/articles.js
export const articles = [
  {
    id: 'domain-generalization',
    title: 'Effect of Domain Generalization Techniques in Low Resource Systems',
    authors:
      'Mahi Aminu, Chisom Chibuike, Fatimo Adebanjo, Omokolade Awosanya, Samuel Oyeneye',
    source: 'arXiv preprint arXiv:2510.27512',
    year: 2025,
    abstract:
      'Investigates the effect of domain generalization techniques on low-resource systems.',
    pdf: 'https://arxiv.org/pdf/2510.27512.pdf',
    details: `
Machine learning models typically assume that training and test data follow the same distribution, an assumption that often fails in real-world scenarios due to distribution shifts. This issue is especially pronounced in low-resource settings, where data scarcity and limited domain diversity hinder robust generalization. 

Domain generalization (DG) approaches address this challenge by learning features that remain invariant across domains, often using causal mechanisms to improve model robustness. In this study, we examine two distinct causal DG techniques in low-resource natural language tasks. 

First, we investigate a causal data augmentation (CDA) approach that automatically generates counterfactual examples to improve robustness to spurious correlations. We apply this method to sentiment classification on the NaijaSenti Twitter corpus, expanding the training data with semantically equivalent paraphrases to simulate controlled distribution shifts. 

Second, we explore an invariant causal representation learning (ICRL) approach using the DINER framework, originally proposed for debiasing aspect-based sentiment analysis. We adapt DINER to a multilingual setting. 

Our findings demonstrate that both approaches enhance robustness to unseen domains: counterfactual data augmentation yields consistent cross-domain accuracy gains in sentiment classification, while causal representation learning with DINER improves out-of-distribution performance in multilingual sentiment analysis, albeit with varying gains across languages.
    `,
  },
  {
    id: 'africaption',
    title:
      'AFRICAPTION: Establishing a New Paradigm for Image Captioning in African Languages',
    authors:
      'Mardiyyah Oduwole, Prince Mireku, Fatimo Adebanjo, Oluwatosin Olajide, Mahi Aminu Aliyu, Jekaterina Novikova',
    source: 'arXiv preprint arXiv:2510.17405',
    year: 2025,
    abstract:
      'Proposes a new framework for image captioning in African languages.',
    pdf: 'https://arxiv.org/pdf/2510.17405.pdf',
    details: `
Multimodal AI research has overwhelmingly focused on high-resource languages, hindering the democratization of advancements in the field. 

To address this, we present AfriCaption, a comprehensive framework for multilingual image captioning in 20 African languages and our contributions are threefold: 
1. A curated dataset built on Flickr8k, featuring semantically aligned captions generated via a context-aware selection and translation process. 
2. A dynamic, context-preserving pipeline that ensures ongoing quality through model ensembling and adaptive substitution. 
3. The AfriCaption model, a 0.5B parameter vision-to-text architecture that integrates SigLIP and NLLB200 for caption generation across under-represented languages. 

This unified framework ensures ongoing data quality and establishes the first scalable image-captioning resource for under-represented African languages, laying the groundwork for truly inclusive multimodal AI.
    `,
  },
  {
    id: 'data-augmentation',
    title:
      'From Scarcity to Efficiency: Investigating the Effects of Data Augmentation on African Machine Translation',
    authors:
      'Mardiyyah Oduwole, Oluwatosin Olajide, Jamiu Suleiman, Faith Hunja, Busayo Awobade, Fatimo Adebanjo, ...',
    source: 'arXiv preprint arXiv:2509.07471',
    year: 2025,
    abstract:
      'Analyzes how data augmentation improves translation quality in African languages.',
    pdf: 'https://arxiv.org/pdf/2509.07471.pdf',
    details: `
The linguistic diversity across the African continent presents different challenges and opportunities for machine translation. 

This study explores the effects of data augmentation techniques in improving translation systems in low-resource African languages. We focus on two data augmentation techniques: sentence concatenation with back translation and switch-out, applying them across six African languages. 

Our experiments show significant improvements in machine translation performance, with a minimum increase of 25% in BLEU score across all six languages. We provide a comprehensive analysis and highlight the potential of these techniques to improve machine translation systems for low-resource languages, contributing to the development of more robust translation systems for under-resourced languages.
    `,
  },
  {
    id: 'flatness-regularization',
    title:
      'Flatness-Aware Regularization for Robust Generalization in Deep Neural Networks',
    authors: 'Chisom Chibuike, Fatimo Adebanjo',
    source: 'mlcollective.org',
    year: 2025,
    abstract:
      'Explores techniques to improve model robustness and generalization in deep learning.',
    pdf: 'https://mlcollective.org/flatness-paper.pdf',
    details: `
Understanding the geometry of the loss landscape in deep neural networks (DNNs) is central to machine learning research because of its role in generalization. Solutions in flatter regions tend to generalize better than sharper ones. 

Motivated by this connection between geometry and generalization, we propose a flatness-aware regularization technique that explicitly penalizes the curvature of the loss surface by incorporating an estimate of the trace of the squared Hessian into the training loss. 

The total loss function for a mini-batch (x, y) is defined as: L_total = L_task(fθ(x), y) + λ * trace(Hessian^2). This method improves robustness and generalization across different deep learning models.
    `,
  },
]
