#!/usr/bin/env node
import index from '../src/index.js';
import { getRandomNumber } from '../src/questions.js';
import { conditions } from '../src/cli.js';
import isPrime from '../src/games/brainPrime/isPrime.js';


index(conditions.brainPrime, getRandomNumber, isPrime);
