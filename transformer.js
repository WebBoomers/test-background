import { pipeline } from '@huggingface/transformers';

const pipe = await pipeline('image-segmentation', 'briaai/RMBG-1.4');
